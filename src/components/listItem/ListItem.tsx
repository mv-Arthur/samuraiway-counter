import React from "react";
import { Chevron } from "../chevron/Chevron";
import { S } from "./ListItem.styled";

type Props = {
     message: string;
     variant: string;
};

export const ListItem: React.FC<Props> = React.memo((props) => {
     const [show, setShow] = React.useState(false);

     const clickHandle = () => {
          setShow(!show);
     };

     return (
          <S.Wrapper>
               <Chevron value={show} onClick={clickHandle} type="horizontal" />

               <S.ItemWrapper>
                    <S.Item>{show ? props.message : props.message.split(" ")[0] + "..."}</S.Item>
                    <S.Variant>{props.variant}</S.Variant>
               </S.ItemWrapper>
          </S.Wrapper>
     );
});
