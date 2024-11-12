import React from "react";
import { Button } from "../button/Button";
import { S } from "./Counter.styled";
import { Sign } from "../sign/Sign";

export const Counter: React.FC = React.memo(() => {
     const [count, setCount] = React.useState(0);

     const onCount = (type: "increment" | "decrement") => {
          return type === "increment" ? setCount(count + 1) : setCount(count - 1);
     };

     const onResume = () => {
          setCount(0);
     };

     return (
          <S.Container>
               <S.ButtonGroup $layout="vertical">
                    <Button type="outlined" variant="success">
                         save
                    </Button>
                    <Button type="outlined" variant="dangerous">
                         delete
                    </Button>
               </S.ButtonGroup>
               <S.CounterArea>
                    <S.Counter>{count}</S.Counter>
                    <S.ButtonGroup $layout="horizontal">
                         <Button onClick={() => onCount("decrement")}>
                              <Sign size={20} value="minus" color="#fff" />
                         </Button>
                         <Button onClick={() => onCount("increment")}>
                              <Sign size={20} value="plus" color="#fff" />
                         </Button>
                    </S.ButtonGroup>
               </S.CounterArea>
               <S.ButtonGroup $layout="vertical">
                    <Button type="outlined" onClick={onResume}>
                         resume
                    </Button>
               </S.ButtonGroup>
          </S.Container>
     );
});
