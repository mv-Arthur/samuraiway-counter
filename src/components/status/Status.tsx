import React from "react";
import styled from "styled-components";

type Props = {
     width?: number;
     height?: number;
     type: "success" | "warning";
};

export const Status: React.FC<Props> = React.memo(({ width = 40, height = 40, ...props }) => {
     return (
          <svg
               width={width + "px"}
               height={height + "px"}
               viewBox={"0 0" + (props.type === "warning" ? " 24 24" : " 1024 1024")}
               xmlns="http://www.w3.org/2000/svg"
          >
               {props.type === "warning" ? <S.Warning /> : <S.Success />}
          </svg>
     );
});

const S = {
     Success: styled.path.attrs({
          d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z",
     })`
          fill: ${(props) => props.theme.success.background};
     `,
     Warning: styled.path.attrs({
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM11.25 13.5V8.25H12.75V13.5H11.25ZM11.25 15.75V14.25H12.75V15.75H11.25Z",
     })`
          fill: ${(props) => props.theme.warning.primary};
     `,
};
