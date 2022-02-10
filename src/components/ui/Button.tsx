import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

// export interface IButtonProps {
//   className?: string;
// }
export type IButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  className?: string;
};

const Button: React.FC<IButtonProps> = ({ className = "", value, ...rest }) => {
  return (
    <button className={styles.button + " " + className} {...rest}>
      {value}
    </button>
  );
};

export default Button;
