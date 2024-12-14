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
    primary: "bg-blue-900 text-white p-2 m-2 rounded-2xl",
    secondary: "bg-blue-500 text-white p-2 m-2 rounded-2xl",
  };
  //
  return (
    <button className={`${variant == "primary" ? v.primary : v.secondary}`}>
      {text}
    </button>
  );
};
