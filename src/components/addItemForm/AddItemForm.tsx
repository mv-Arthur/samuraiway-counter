import React from "react";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { S } from "./AddItemForm.styled";

type Props = {
     onSubmit: (title: string) => void;
     limit?: number;
};

export const AddItemForm: React.FC<Props> = React.memo(({ limit = 20, ...props }) => {
     const [value, setValue] = React.useState("");
     const [error, setError] = React.useState(false);
     const clickHandler = () => {
          if (!error) {
               props.onSubmit(value);
               setValue("");
          }
     };

     const changeHandler = (value: string) => {
          if (value.length > limit) setError(true);
          else setError(false);
          setValue(value);
     };

     return (
          <S.Wrapper>
               <Input
                    error={error}
                    type="text"
                    onChange={changeHandler}
                    value={value}
                    label={error ? `limit exceeded - ${value.length} / ${limit}` : "write name of counter"}
               />
               <Button disabled={!value || error} onClick={clickHandler}>
                    add
               </Button>
          </S.Wrapper>
     );
});
