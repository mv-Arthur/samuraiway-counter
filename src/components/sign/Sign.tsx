import React from "react";

type Props = {
     value: "minus" | "plus";
     size: number;
     color: string;
};

export const Sign: React.FC<Props> = React.memo((props) => {
     return (
          <svg
               width={props.size}
               height={props.size}
               viewBox="0 0 802 802"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <rect x="18.5" y="18.5" width="765" height="765" rx="135.5" stroke={props.color} strokeWidth="37" />
               {props.value === "plus" && <rect x="354" y="200" width="93" height="401" rx="39" fill={props.color} />}
               <rect
                    x="608.687"
                    y="356.011"
                    width="93"
                    height="401"
                    rx="39"
                    transform="rotate(90.4302 608.687 356.011)"
                    fill={props.color}
               />
          </svg>
     );
});
