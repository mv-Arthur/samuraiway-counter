import styled from "styled-components";
import { TypeProps, VariantProps } from "./Button";

export const S = {
     Button: styled.div<{ $variant: VariantProps; $type: TypeProps; $disabled: boolean }>`
          padding: 10px 20px;

          ${(props) => {
               return props.$type === "contained" && `background-color: ${props.theme[props.$variant].background}`;
          }};
          color: ${(props) =>
               props.$type === "text" || props.$type === "outlined" ? props.theme[props.$variant].background : "#fff"};
          ${(props) => props.$type === "outlined" && `border: 1px solid ${props.theme[props.$variant].background}`};

          ${(props) =>
               props.$disabled &&
               `background-color: ${props.theme.disabled.primary};
                                           color:${props.theme.disabled.secondary};
                                           border:none;`}

          display: inline-block;
          word-break: break-all;
          text-align: center;
          border-radius: 7px;
          cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
          transition: 0.4s;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
               background-color: ${(props) =>
                    props.$type === "contained"
                         ? props.theme[props.$variant].hover
                         : props.theme[props.$variant].light};
               ${(props) => props.$type === "outlined" && `border:1px solid ${props.theme[props.$variant].high}`};

               -webkit-box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
               -moz-box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
               box-shadow: 0px 8px 10px 2px rgba(34, 60, 80, 0.2);
          }

          ${(props) =>
               props.$disabled &&
               `
               pointer-events: none;
          `}
     `,
};
