import styled from "styled-components";

export const S = {
     Container: styled.div<{ $error: boolean }>`
          display: inline-block;
          width: 250px;
          height: 50px;
          position: relative;
          border: 2px solid
               ${(props) => (props.$error ? props.theme.dangerous.background : props.theme.primary.background)};
          background: transparent;
          border-radius: 7px;
          z-index: 1;
     `,
     Input: styled.input`
          width: 100%;
          height: 100%;
          border: none;
          background: transparent;
          outline: none;
          padding: 10px;
          padding-left: 20px;
          font-size: 18px;
          font-weight: 200;
          z-index: 2;
     `,
};
