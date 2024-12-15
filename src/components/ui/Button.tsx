import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  EndIcon?: ReactElement;
  onClick: (e: any) => void;
}
export const Button = (props: ButtonProps) => {
  const { variant, size, text, startIcon, EndIcon, onClick } = props;

  const v = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-300 text-purple-600",
  };
  const defaultStyle = "rounded-md flex m-2 items-center";
  const sizeStyle = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-4 px-6",
  };
  //
  return (
    <button
      onClick={onClick}
      className={`${v[variant]} ${defaultStyle} ${sizeStyle[size]}`}
    >
      {startIcon ? <div className="pr-2">{startIcon}</div> : null} {text}
      {EndIcon ? <div className="pr-2">{EndIcon}</div> : null}
    </button>
  );
};
