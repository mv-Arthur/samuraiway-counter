import styled from "styled-components";
import { VariantProps } from "./Button";

type Select = {
     background: string;
     hover: string;
};

const select = (variant: VariantProps): Select => {
     switch (variant) {
          case "primary": {
               return { background: "#2f90ff", hover: "#097bfd" };
          }

          case "dangerous": {
               return { background: "#d32f2f", hover: "#cf2727" };
          }

          case "success": {
               return { background: "#2e7d32", hover: "#1e7322" };
          }

          default: {
               return { background: "#2f90ff", hover: "#097bfd" };
          }
     }
};

export const S = {
     Button: styled.div<{ $variant: VariantProps }>`
          padding: 10px 20px;
          background-color: ${(props) => select(props.$variant).background};
          color: #fff;
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
               background-color: ${(props) => select(props.$variant).hover};
               -webkit-box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
               -moz-box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
               box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
          }
     `,
};
