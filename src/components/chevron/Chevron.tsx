import React from "react";

type Props = {
     width?: number;
     height?: number;
     color?: string;
     value: boolean;
     onClick?: () => void;
     type?: "vertical" | "horizontal";
};

export const Chevron: React.FC<Props> = React.memo(
     ({ type = "vertical", width = 40, height = 40, color = "#000", ...props }) => {
          const clickHandle = () => {
               props.onClick?.();
          };
          return (
               <svg
                    style={{
                         transform:
                              type === "vertical"
                                   ? `rotate(${props.value ? 180 : 0}deg)`
                                   : `rotate(${props.value ? 90 : 270}deg)`,
                         transition: "0.3s",
                         cursor: "pointer",
                    }}
                    onClick={clickHandle}
                    width={`${width}px`}
                    height={`${height}px`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
               >
                    <rect width="24" height="24" fill="white" />
                    <path d="M17 9.5L12 14.5L7 9.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
               </svg>
          );
     },
);
