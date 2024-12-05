import React from "react";
import { Button } from "../button/Button";
import { S } from "./Counter.styled";
import { Sign } from "../sign/Sign";
import { RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { changeValue, Counter as CounterType, Operation, resume } from "../../state/reducers/counter/counterReducer";

type Props = {
     id: string;
};

export const Counter: React.FC<Props> = React.memo((props) => {
     const counter = useSelector<RootState, CounterType>(
          (state) => state.counters.counters.find((counter) => counter.id === props.id) as CounterType,
     );
     const settingsHaveAError = !!counter.errors.filter((error) => error.status).length;

     const dispatch = useDispatch();

     const onCount = (operation: Operation) => {
          dispatch(changeValue(props.id, operation));
     };

     const onResumeHandler = () => {
          dispatch(resume(counter.id));
     };

     return (
          <S.CounterArea>
               <S.Counter>{counter.value}</S.Counter>
               <S.ButtonGroup $layout="horizontal">
                    <Button
                         disabled={settingsHaveAError || counter.value === counter.settings.low}
                         onClick={() => onCount("DECREMENT")}
                    >
                         <Sign size={20} value="minus" color="#fff" />
                    </Button>
                    <Button onClick={onResumeHandler}>resume</Button>
                    <Button
                         disabled={settingsHaveAError || counter.value === counter.settings.high}
                         onClick={() => onCount("INCREMENT")}
                    >
                         <Sign size={20} value="plus" color="#fff" />
                    </Button>
               </S.ButtonGroup>
          </S.CounterArea>
     );
});
