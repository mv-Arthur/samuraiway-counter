import { changeValue, counterReducer, createCounter, deleteCounter, putSettings } from "./counterReducer";
import { initialState } from "./initalState";

describe("counter reducer", () => {
     test("create new counter", () => {
          const afterChanges = counterReducer(initialState, createCounter("somethink"));

          expect(afterChanges.counters.length).toBe(3);
          expect(afterChanges.counters[0].title).toBe("somethink");
     });

     test("add settings successfully", () => {
          const counterId = "1";
          const afterChanges = counterReducer(initialState, putSettings(counterId, { high: 20, low: -20, step: 5 }));
          const counter = afterChanges.counters.find((counter) => counter.id === counterId);
          expect(counter?.errors.filter((error) => error.status).length).toBe(0);
     });

     test("add settings uncorrectable (null values one and more in settings fields)", () => {
          const counterId = "1";
          const afterChanges = counterReducer(initialState, putSettings(counterId, { high: 0, low: 0, step: 0 }));
          const counter = afterChanges.counters.find((counter) => counter.id === counterId);
          expect(counter?.errors.filter((error) => error.status).length).toBe(3);
     });

     test("low border higher high border", () => {
          const counterId = "1";
          const afterChanges = counterReducer(initialState, putSettings(counterId, { high: 12, low: 21, step: 2 }));
          const counter = afterChanges.counters.find((counter) => counter.id === counterId);
          expect(counter?.errors.filter((error) => error.variant === "BORDER")[0].status).toBe(true);
          expect(counter?.errors.filter((error) => error.variant === "FIELD")[0].status).toBe(false);
          expect(counter?.errors.filter((error) => error.variant === "FIELD")[0].status).toBe(false);
          const nextChanges = counterReducer(afterChanges, putSettings(counterId, { high: 20, low: 21, step: 5 }));
          const secondCounter = nextChanges.counters.find((counter) => counter.id === counterId);
          expect(secondCounter?.errors.find((error) => error.variant === "BORDER")?.status).toBe(true);
     });

     test("uncorrect step value", () => {
          const counterId = "1";
          const afterChanges = counterReducer(initialState, putSettings(counterId, { high: 12, low: 15, step: -1 }));
          const counter = afterChanges.counters.find((counter) => counter.id === counterId);
          expect(counter?.errors.filter((error) => error.status).length).toBe(2);
     });

     test("increment", () => {
          const counterId = "1";
          const settedSettings = counterReducer(initialState, putSettings(counterId, { high: 20, low: -20, step: 6 }));
          expect(
               counterReducer(settedSettings, changeValue(counterId, "INCREMENT")).counters.find(
                    (counter) => counterId === counter.id,
               )?.value,
          ).toBe(-14);

          let result = settedSettings;

          for (let i = 0; i < 221; i++) {
               result = counterReducer(result, changeValue(counterId, "INCREMENT"));
          }

          const founded = result.counters.find((counter) => counterId === counter.id);
          expect(founded?.value).toBe(20);
          expect(founded?.residue).toBe(2);
     });

     test("decrement", () => {
          const counterId = "1";
          const settedSettings = counterReducer(initialState, putSettings(counterId, { high: 20, low: -20, step: 6 }));
          expect(
               counterReducer(settedSettings, changeValue(counterId, "DECREMENT")).counters.find(
                    (counter) => counterId === counter.id,
               )?.value,
          ).toBe(-20);

          let result = settedSettings;

          for (let i = 0; i < 221; i++) {
               result = counterReducer(result, changeValue(counterId, "DECREMENT"));
          }

          const founded = result.counters.find((counter) => counterId === counter.id);

          expect(founded?.value).toBe(-20);
          expect(founded?.residue).toBe(0);
     });

     test("delete", () => {
          const counterID = "1";
          const endState = counterReducer(initialState, deleteCounter(counterID));
          expect(endState.counters.length).toBe(1);
     });
});
