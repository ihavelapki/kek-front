import type { InputHTMLAttributes } from "react";
import classes from "./KekInput.module.css";

// Типизируем все стандартные HTML-пропсы input
type KekInputProps = InputHTMLAttributes<HTMLInputElement>;

const KekInput: React.FC<KekInputProps> = (props) => {
  return <input {...props} className={classes.input} />;
};

export default KekInput;
