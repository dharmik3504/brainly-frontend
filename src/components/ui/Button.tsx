import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  EndIcon?: ReactElement;
  onClick: (e: any) => void;
  fullWidth?: boolean;
  loading?: boolean;
}
export const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    text,
    startIcon,
    EndIcon,
    onClick,
    fullWidth,
    loading,
  } = props;

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
      className={`${v[variant]} ${defaultStyle} ${sizeStyle[size]} ${
        fullWidth ? "w-full flex justify-center items-center" : ""
      } ${loading ? "opacity-45" : ""}`}
      disabled={loading}
    >
      {startIcon ? <div className="pr-2">{startIcon}</div> : null} {text}
      {EndIcon ? <div className="pr-2">{EndIcon}</div> : null}
    </button>
  );
};
