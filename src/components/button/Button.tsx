import React from "react";
import { S } from "./Button.styled";

export type VariantProps = "primary" | "dangerous" | "success";
export type TypeProps = "outlined" | "contained" | "text";

type Props = {
     children: React.ReactNode;
     onClick?: () => void;
     variant?: VariantProps;
     type?: TypeProps;
     disabled?: boolean;
};

export const Button: React.FC<Props> = React.memo(
     ({ disabled = false, type = "contained", variant = "primary", ...props }) => {
          const clickHandler = () => {
               props?.onClick?.();
          };

          return (
               <S.Button $type={type} $disabled={disabled} onClick={clickHandler} $variant={variant}>
                    {props.children}
               </S.Button>
          );
     },
);
