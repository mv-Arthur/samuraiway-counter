import styled from "styled-components";

export const S = {
     H2: styled.div`
          font-size: 25px;
          font-weight: 600;
          text-transform: uppercase;
          color: ${(props) => props.theme.warning.primary};
          margin-bottom: 10px;
     `,
     Main: styled.div`
          display: grid;
          grid-template-areas: "left right";
     `,
     Right: styled.div`
          grid-area: right;
     `,
     Left: styled.div`
          grid-area: left;
     `,
};
