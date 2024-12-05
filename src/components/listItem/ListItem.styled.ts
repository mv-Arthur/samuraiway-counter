import styled from "styled-components";

export class S {
     static Wrapper = styled.div`
          display: flex;
          gap: 10px;
     `;
     static Item = styled.div`
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 12px;
          width: 150px;
          word-break: break-all;
          user-select: none;
     `;
     static Variant = styled(this.Item)`
          color: ${(props) => props.theme.warning.primary};
          font-size: 16px;
          text-align: end;
     `;
     static ItemWrapper = styled.div`
          display: flex;
          justify-content: space-between;
          align-items: center;
     `;
}
