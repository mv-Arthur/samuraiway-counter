import { v4 as uuid } from "uuid";
import { errorHandler } from "./errorHandler";
import { initialState } from "./initalState";
export type Settings = {
     high: number;
     low: number;
     step: number;
};

export type ErrorType = {
     status: boolean;
     message: string;
     variant: ErrorVariant;
};

export type StateType = {
     counters: Counter[];
     global: Settings;
};

export type Counter = {
     id: string;
     value: number;
     residue: number;
     title: string;
     settings: Settings;
     errors: ErrorType[];
};

type ErrorVariant = "FIELD" | "BORDER" | "STEP" | "LIMIT";

export type Operation = "INCREMENT" | "DECREMENT";

export const counterReducer = (state: StateType = initialState, action: Action): StateType => {
     switch (action.type) {
          case "CREATE": {
               return {
                    ...state,
                    counters: [
                         {
                              id: uuid(),
                              value: state.global.low,
                              title: action.payload.title,
                              residue: 0,
                              settings: { high: state.global.high, low: state.global.low, step: state.global.step },
                              errors: errorHandler(state.global),
                         },
                         ...state.counters,
                    ],
               };
          }

          case "SETTINGS": {
               return {
                    ...state,
                    counters: state.counters.map((counter) => {
                         if (counter.id === action.payload.id) {
                              const errors = errorHandler(action.payload.settings);
                              return {
                                   ...counter,
                                   errors,
                                   settings: action.payload.settings,
                                   value: action.payload.settings.low,
                              };
                         }

                         return counter;
                    }),
               };
          }

          case "VALUE": {
               return {
                    ...state,
                    counters: state.counters.map((counter) => {
                         if (counter.id === action.payload.id) {
                              const noErrors = !counter.errors.filter((error) => error.status).length;
                              let result = counter;
                              if (noErrors) {
                                   if (action.payload.operation === "INCREMENT") {
                                        if (result.value < result.settings.high) {
                                             const resOfExpr = result.value + result.settings.step;
                                             result = { ...result, value: resOfExpr };
                                             if (resOfExpr > result.settings.high) {
                                                  result = {
                                                       ...result,
                                                       residue: resOfExpr - result.settings.high,
                                                       value: result.settings.high,
                                                  };
                                             }
                                        }
                                   }

                                   if (action.payload.operation === "DECREMENT") {
                                        if (result.value > result.settings.low) {
                                             const resOfExpr = result.value - result.settings.step;
                                             result = { ...result, value: resOfExpr };
                                             if (resOfExpr < result.settings.low) {
                                                  result = {
                                                       ...result,
                                                       residue: resOfExpr - result.settings.low,
                                                       value: result.settings.low,
                                                  };
                                             }
                                        }
                                   }

                                   return result;
                              } else return counter;
                         } else {
                              return counter;
                         }
                    }),
               };
          }

          case "DELETE": {
               return { ...state, counters: state.counters.filter((counter) => counter.id !== action.payload.id) };
          }

          case "PUT-GLOBAL": {
               return { ...state, global: action.payload.settings };
          }

          case "RESUME": {
               return {
                    ...state,
                    counters: state.counters.map((counter) =>
                         counter.id === action.payload.id ? { ...counter, value: counter.settings.low } : counter,
                    ),
               };
          }

          default: {
               return state;
          }
     }
};

type Action = CreateCounter | PutSettings | ChangeValue | DeleteCounter | PutGlobal | Resume;

type CreateCounter = ReturnType<typeof createCounter>;
export const createCounter = (title: string) => ({ type: "CREATE" as const, payload: { title } });

type PutSettings = ReturnType<typeof putSettings>;
export const putSettings = (id: string, settings: Settings) => ({
     type: "SETTINGS" as const,
     payload: { id, settings },
});

type ChangeValue = ReturnType<typeof changeValue>;
export const changeValue = (id: string, operation: Operation) => ({
     type: "VALUE" as const,
     payload: { id, operation },
});

type DeleteCounter = ReturnType<typeof deleteCounter>;
export const deleteCounter = (id: string) => ({ type: "DELETE" as const, payload: { id } });

type PutGlobal = ReturnType<typeof putGlobal>;
export const putGlobal = (settings: Settings) => ({ type: "PUT-GLOBAL" as const, payload: { settings } });

type Resume = ReturnType<typeof resume>;
export const resume = (id: string) => ({ type: "RESUME" as const, payload: { id } });
