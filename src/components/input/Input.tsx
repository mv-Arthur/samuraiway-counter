import React from "react";
import { S } from "./Input.styled";
import { Label } from "../Label/Label";
import { useClickOutside } from "../../hooks/useClickOutside";

type Props = {
     onChange: (value: string) => void;
     label: string;
     value: string;
     type?: "number" | "text";
     error?: boolean;
};

export const Input: React.FC<Props> = React.memo(({ value, error = false, type = "number", ...props }) => {
     // const [value, setValue] = React.useState("");
     const [focused, setFocused] = React.useState(!!value);
     const inputRef = React.useRef<null | HTMLInputElement>(null);

     React.useEffect(() => {
          if (!value) setFocused(false);
          else setFocused(true);
     }, [value]);

     const onClickOutsideHandler = () => {
          if (!value) setFocused(false);
     };

     useClickOutside(inputRef, onClickOutsideHandler);

     const onFocusHandle = () => {
          setFocused(true);
     };

     const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          props.onChange(event.currentTarget.value);
     };

     return (
          <S.Container $error={error}>
               <Label
                    style={{
                         position: "absolute",
                         top: "30%",
                         left: "13px",
                         zIndex: "-1",
                    }}
                    text={props.label}
                    value={focused}
                    offset={{ x: -5, y: -26 }}
                    background="#fff"
                    error={error}
               />
               <S.Input type={type} value={value} onChange={onChangeHandler} ref={inputRef} onFocus={onFocusHandle} />
          </S.Container>
     );
});
