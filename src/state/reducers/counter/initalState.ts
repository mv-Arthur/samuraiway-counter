import { StateType } from "./counterReducer";

export const initialState = {
     counters: [
          {
               id: "1",
               value: 0,
               title: "title",
               residue: 0,
               settings: {
                    high: 0,
                    low: 0,
                    step: 0,
               },
               errors: [
                    {
                         status: true,
                         message: "settings form should be fullfiled",
                         variant: "FIELD",
                    },
                    {
                         status: true,
                         message: "the upper limit should not be less than or equal to the lower limit, and vice versa ",
                         variant: "BORDER",
                    },
                    {
                         status: true,
                         message: "step value must not be less than zero",
                         variant: "STEP",
                    },
               ],
          },
          {
               id: "2",
               value: 0,
               title: "title",
               residue: 0,
               settings: {
                    high: 0,
                    low: 0,
                    step: 0,
               },
               errors: [
                    {
                         status: true,
                         message: "settings form should be fullfiled",
                         variant: "FIELD",
                    },
                    {
                         status: true,
                         message: "the upper limit should not be less than or equal to the lower limit, and vice versa ",
                         variant: "BORDER",
                    },
                    {
                         status: true,
                         message: "step value must not be less than zero",
                         variant: "STEP",
                    },
               ],
          },
     ],
     global: {
          high: 0,
          low: 0,
          step: 0,
     },
} satisfies StateType;
