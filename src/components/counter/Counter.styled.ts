import styled from "styled-components";

export const S = {
     CounterArea: styled.div`
          display: flex;
          align-items: center;
          flex-direction: column;
     `,

     Counter: styled.div`
          font-size: 40px;
          margin-bottom: 70px;
     `,

     ButtonGroup: styled.div<{ $layout: "vertical" | "horizontal" }>`
          display: flex;
          gap: 5px;
          flex-direction: ${(props) => (props.$layout === "horizontal" ? "row" : "column")};
     `,
};
