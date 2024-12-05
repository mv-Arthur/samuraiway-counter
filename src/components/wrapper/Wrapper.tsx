import React from "react";
import { Button } from "../button/Button";
import { S } from "./Wrapper.styled";
import { Form } from "../form/Form";
import { Counter, deleteCounter, putSettings, Settings } from "../../state/reducers/counter/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { List } from "../list/List";

type Side = "main" | "second";

type Props = {
     children: React.ReactNode;
     id: string;
};

export const Wrapper: React.FC<Props> = React.memo((props) => {
     const [side, setSide] = React.useState<Side>("main");
     const counter = useSelector<RootState, Counter>(
          (state) => state.counters.counters.find((counter) => counter.id === props.id) as Counter,
     );

     const dispatch = useDispatch();

     const clickHandler = () => {
          setSide(side === "main" ? "second" : "main");
     };

     const onSubmitHandler = (values: Settings) => {
          dispatch(putSettings(counter.id, values));
          setSide("main");
     };

     const deleteHandler = () => {
          dispatch(deleteCounter(counter.id));
     };

     return (
          <S.Wrapper>
               <S.Label>{side === "main" ? `counter - "${counter.title}"` : "settings"}</S.Label>
               <S.Container>
                    <S.ButtonGroup $layout="vertical">
                         <Button type="outlined" variant="success">
                              save
                         </Button>
                         <Button onClick={deleteHandler} type="outlined" variant="dangerous">
                              delete
                         </Button>
                    </S.ButtonGroup>
                    {side === "main" ? (
                         props.children
                    ) : (
                         <Form onSubmit={onSubmitHandler} defaultValues={counter.settings} />
                    )}
                    <S.ButtonGroup $layout="vertical">
                         <Button onClick={clickHandler}>{side === "main" ? "settings" : "main"}</Button>
                    </S.ButtonGroup>
               </S.Container>
               <List errors={counter.errors} />
          </S.Wrapper>
     );
});
