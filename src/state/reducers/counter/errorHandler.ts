import { ErrorType, Settings } from "./counterReducer";

export const errorHandler = (settings: Settings): ErrorType[] => {
     let errors = [
          {
               status: true,
               message: "settings form should be fullfiled",
               variant: "FIELD" as const,
          },
          {
               status: true,
               message: "the upper limit should not be less than or equal to the lower limit, and vice versa ",
               variant: "BORDER" as const,
          },
          {
               status: true,
               message: "step value must not be less than zero",
               variant: "STEP" as const,
          },
     ];

     if (settings.high && settings.low && settings.step) {
          errors = errors.map((error) => (error.variant === "FIELD" ? { ...error, status: false } : error));
     } else {
          errors = errors.map((error) => (error.variant === "FIELD" ? { ...error, status: true } : error));
     }

     if (settings.high > settings.low) {
          errors = errors.map((error) => (error.variant === "BORDER" ? { ...error, status: false } : error));
     } else {
          errors = errors.map((error) => (error.variant === "BORDER" ? { ...error, status: true } : error));
     }

     if (settings.step > 0) {
          errors = errors.map((error) => (error.variant === "STEP" ? { ...error, status: false } : error));
     } else {
          errors = errors.map((error) => (error.variant === "STEP" ? { ...error, status: true } : error));
     }

     return errors;
};
