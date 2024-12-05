import styled from "styled-components";

export const S = {
     Wrapper: styled.div`
          -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          border-radius: 10px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          align-items: center;
     `,

     Container: styled.div`
          display: flex;
          align-items: center;
          gap: 10px;
     `,

     ButtonGroup: styled.div<{ $layout: "vertical" | "horizontal" }>`
          display: flex;
          gap: 5px;
          flex-direction: ${(props) => (props.$layout === "horizontal" ? "row" : "column")};
     `,

     Label: styled.div`
          text-transform: uppercase;
          margin-bottom: 20px;
          font-size: 20px;
          user-select: none;
     `,
};
