import styled from "styled-components";

export class S {
     static Container = styled.div``;
     static Label = styled.div``;
     static Actions = styled.div`
          display: flex;
          align-items: center;
          gap: 5px;
     `;

     static Header = styled.div<{ $haveAMistake: boolean }>`
          width: 400px;
          word-break: break-all;
          padding: 10px 20px;
          border: 2px solid
               ${(props) => (props.$haveAMistake ? props.theme.warning.primary : props.theme.success.background)};
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          letter-spacing: 2px;
          text-transform: uppercase;
     `;
     static Items = styled.div`
          padding: 0 20px;
          display: flex;
          margin-top: 10px;
          flex-direction: column;
          gap: 10px;
     `;
}
