import styled from "styled-components";

export const S = {
     ButtonGroup: styled.div<{ $layout: "vertical" | "horizontal" }>`
          display: flex;
          gap: 5px;
          flex-direction: ${(props) => (props.$layout === "horizontal" ? "row" : "column")};
     `,

     CounterArea: styled.div`
          display: flex;
          align-items: center;
          flex-direction: column;
     `,

     Container: styled.div`
          display: flex;
          align-items: center;
          padding: 20px;
          -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          border-radius: 10px;
          gap: 10px;
     `,

     Counter: styled.div`
          font-size: 40px;
          margin-bottom: 70px;
     `,

     Icon: styled.img`
          width: 20px;
          aspect-ratio: 1;
          fill: #fff;
          stroke: #fff;
     `,
};
