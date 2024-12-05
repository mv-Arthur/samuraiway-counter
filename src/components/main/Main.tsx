import React from "react";
import { Counters } from "../counters/Counters";
import { Form } from "../form/Form";
import { putGlobal, Settings } from "../../state/reducers/counter/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { S } from "./main.styled";

export const Main = React.memo(() => {
     const settings = useSelector<RootState, Settings>((state) => state.counters.global);
     const dispatch = useDispatch();

     const submitHandler = (settings: Settings) => {
          dispatch(putGlobal(settings));
     };

     return (
          <S.Main>
               <S.Left>
                    <Counters />
               </S.Left>
               <S.Right>
                    <S.H2>global settings</S.H2>
                    <Form isMain onSubmit={submitHandler} defaultValues={settings} />
               </S.Right>
          </S.Main>
     );
});
