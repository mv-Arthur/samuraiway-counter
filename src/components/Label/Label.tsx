import React from "react";
import { S } from "./Label.styled";

export type Offset = {
     x: number;
     y: number;
};

type Props = {
     text: string;
     value: boolean;
     offset: Offset;
     background?: string;
     style?: React.CSSProperties;
     error?: boolean;
};

export const Label: React.FC<Props> = React.memo(({ error = false, ...props }) => {
     return (
          <S.Label
               style={props.style}
               $value={props.value}
               $background={props.background}
               $offset={props.offset}
               $error={error}
          >
               {props.text}
          </S.Label>
     );
});
