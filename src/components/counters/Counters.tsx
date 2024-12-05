import { RootState } from "../../state/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter as CounterType, createCounter } from "../../state/reducers/counter/counterReducer";
import { Counter } from "../counter/Counter";
import { Wrapper } from "../wrapper/Wrapper";
import { AddItemForm } from "../addItemForm/AddItemForm";
import { S } from "./Counters.styled";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export const Counters: React.FC = React.memo(() => {
     const [parent] = useAutoAnimate();

     const counters = useSelector<RootState, CounterType[]>((state) => state.counters.counters);
     const dispatch = useDispatch();

     const onSubmitHandler = (title: string) => {
          dispatch(createCounter(title));
     };

     return (
          <S.Wrapper>
               <AddItemForm onSubmit={onSubmitHandler} />
               <S.Countainer ref={parent}>
                    {counters.map((counter) => (
                         <Wrapper key={counter.id} id={counter.id}>
                              <Counter id={counter.id} />
                         </Wrapper>
                    ))}
               </S.Countainer>
          </S.Wrapper>
     );
});
