import React, { useEffect, useState } from "react";
import styles from "./Error.module.scss";

export interface IErrorProps {
  className?: string;
  error: { text: string };
}

const Error: React.FC<IErrorProps> = ({ className = "", error }) => {
  const [fade, setFade] = useState(0);

  useEffect(() => {
    setFade((prev) => prev + 1);
  }, [error]);

  // use key=fade for repaint div and restart fadeout animation
  return (
    <div key={fade} className={styles.error + " " + className}>
      {error.text}
    </div>
  );
};

export default Error;
