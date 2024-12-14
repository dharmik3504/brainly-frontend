export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  EndIcon?: any;
  onClick: (e: any) => void;
}
export const Button = (props: ButtonProps) => {
  const { variant, size, text, startIcon, EndIcon } = props;
  const v = {
    primary: "bg-purple-600",
    secondary: "bg-purple-300",
  };
  const defaultStyle = "rounded-2xl text-white flex";
  const sizeStyle = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-4 px-6",
  };
  //
  return (
    <button className={`${v[variant]} ${defaultStyle} ${sizeStyle[size]}`}>
      {startIcon ? <div className="pr-2">{startIcon}</div> : null} {text}
      {EndIcon ? <div className="pr-2">{EndIcon}</div> : null}
    </button>
  );
};
