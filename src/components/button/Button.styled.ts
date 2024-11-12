import styled from "styled-components";
import { TypeProps, VariantProps } from "./Button";

type Variants = {
     [key in VariantProps]: {
          background: string;
          hover: string;
          light: string;
          high: string;
     };
};

const variants = {
     success: {
          background: "#2e7d32",
          hover: "#1e7322",
          light: "#d5f7d6",
          high: "#07660c",
     },
     primary: {
          background: "#2f90ff",
          hover: "#097bfd",
          light: "#e3e3e3",
          high: "#024ca1",
     },
     dangerous: {
          background: "#d32f2f",
          hover: "#cf2727",
          light: "#e8a5a5",
          high: "#6b0000",
     },
} satisfies Variants;

export const S = {
     Button: styled.div<{ $variant: VariantProps; $type: TypeProps }>`
          padding: 10px 20px;

          ${(props) => props.$type === "contained" && `background-color: ${variants[props.$variant].background};`}
          color: ${(props) =>
               props.$type === "text" || props.$type === "outlined" ? variants[props.$variant].background : "#fff"};
          ${(props) => props.$type === "outlined" && `border: 1px solid ${variants[props.$variant].background}`};

          display: inline-block;
          word-break: break-all;
          text-align: center;
          border-radius: 7px;
          cursor: pointer;
          transition: 0.4s;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
               background-color: ${(props) =>
                    props.$type === "contained" ? variants[props.$variant].hover : variants[props.$variant].light};
               ${(props) => props.$type === "outlined" && `border:1px solid ${variants[props.$variant].high}`};

               -webkit-box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
               -moz-box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
               box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
          }
     `,
};
