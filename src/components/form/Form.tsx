import React from "react";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { S } from "./Form.styled";
import { Settings } from "../../state/reducers/counter/counterReducer";

type Props = {
     onSubmit: (values: Settings) => void;
     defaultValues?: Settings | null;
     isMain?: boolean;
};

export const Form: React.FC<Props> = React.memo(({ isMain = false, ...props }) => {
     const [values, setValues] = React.useState({
          high: props.defaultValues?.high ? props.defaultValues.high.toString() : "",
          low: props.defaultValues?.low ? props.defaultValues.low.toString() : "",
          step: props.defaultValues?.step ? props.defaultValues.step.toString() : "",
     });

     const onSubmit = () => {
          const model = {
               high: +values.high,
               low: +values.low,
               step: +values.step,
          };
          props.onSubmit(model);
     };

     return (
          <S.Container>
               <S.InputsArea>
                    <Input
                         value={values.high}
                         onChange={(value) => setValues({ ...values, high: value })}
                         label="write a hight border"
                    />
                    <Input
                         value={values.low}
                         label="write a low border"
                         onChange={(value) => setValues({ ...values, low: value })}
                    />
                    <Input
                         value={values.step}
                         label="write a step"
                         onChange={(value) => setValues({ ...values, step: value })}
                    />
                    <S.ButtonsArea>
                         <Button onClick={onSubmit} variant="success">
                              save
                         </Button>
                         {!isMain && <Button variant="dangerous">reset</Button>}
                    </S.ButtonsArea>
               </S.InputsArea>
          </S.Container>
     );
});
