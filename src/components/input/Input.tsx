import type React from "react";
import type { FieldError } from "react-hook-form";
import styles from './input.module.css';

type TInput = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder: string;
  error?: FieldError;
  type: string
}

function Input({value, onChange, onBlur, placeholder, error, type}: TInput) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.input_error: ''}`}
        data-testid='input'
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  )
};

export default Input;