import React from "react";
import { Status } from "../status/Status";
import { Chevron } from "../chevron/Chevron";
import { ListItem } from "../listItem/ListItem";
import { ErrorType } from "../../state/reducers/counter/counterReducer";
import { S } from "./List.styled";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
     errors: ErrorType[];
};

export const List: React.FC<Props> = React.memo(({ errors }) => {
     const [show, setShow] = React.useState(false);
     const mistakes = React.useMemo(() => errors.filter((error) => error.status), [errors]);
     const haveAMistake = React.useMemo(() => Boolean(mistakes.length), [errors]);
     const [parent] = useAutoAnimate();

     const clickHandle = () => {
          setShow(!show);
     };

     return (
          <S.Container ref={parent}>
               <S.Header $haveAMistake={haveAMistake}>
                    <S.Label>{haveAMistake ? "have a few mistakes!" : "success!"}</S.Label>
                    <S.Actions>
                         <Status type={haveAMistake ? "warning" : "success"} width={25} height={25} />
                         {haveAMistake && <Chevron value={show} onClick={clickHandle} />}
                    </S.Actions>
               </S.Header>
               {show && (
                    <S.Items>
                         {mistakes.map((mistake) => (
                              <ListItem key={mistake.variant} message={mistake.message} variant={mistake.variant} />
                         ))}
                    </S.Items>
               )}
          </S.Container>
     );
});
