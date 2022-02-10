import React, { useState } from "react";
import { ContactType } from "../../interfaces/contact";
import styles from "./TextField.module.scss";

export interface ITextFieldProps {
  name: keyof ContactType;
  value: string;
  label: string;
  onChange: (name: keyof ContactType, value: string) => void;
  className?: string;
}

const TextField: React.FC<ITextFieldProps> = ({ name, value, label, onChange, className = "" }) => {
  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChange(name, ev.target.value);
  };

  const handleBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
    onChange(name, ev.target.value);
  };

  const handleKeyUp = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    switch (ev.key) {
      case "Enter":
        // onChange((ev.target as HTMLInputElement).value);
        (ev.target as HTMLInputElement).blur();
    }
  };

  return (
    <label className={styles.textField + " " + className}>
      <span>{label}</span>
      <input value={value} name={name} onChange={handleChange} onBlur={handleBlur} onKeyUp={handleKeyUp} />
    </label>
  );
};

export default TextField;
