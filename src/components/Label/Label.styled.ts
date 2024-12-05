import styled from "styled-components";
import { Offset } from "./Label";

export const S = {
     Label: styled.div<{ $value: boolean; $offset: Offset; $background?: string; $error: boolean }>`
          display: inline-block;
          transform: translate(0px, 0px);
          font-size: 15px;
          transition: 0.5s all;
          padding: 0 10px;
          color: ${(props) => (props.$error ? props.theme.dangerous.background : "#000")};
          ${(props) => props.$background && `background: ${props.$background};`}
          ${(props) => props.$value && `transform: translate(${props.$offset.x}px, ${props.$offset.y}px);`}
     `,
};
