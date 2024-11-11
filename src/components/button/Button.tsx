import React from "react";
import { S } from "./Button.styled";

export type VariantProps = "primary" | "dangerous" | "success";

type Props = {
     children: React.ReactNode;
     onClick?: () => void;
     variant?: VariantProps;
};

export const Button: React.FC<Props> = React.memo(({ variant = "primary", ...props }) => {
     const clickHandler = () => {
          props?.onClick?.();
     };

     return (
          <S.Button onClick={clickHandler} $variant={variant}>
               {props.children}
          </S.Button>
     );
});
