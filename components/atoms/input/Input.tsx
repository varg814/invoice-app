import React from "react";
import { InputProps } from "@/types";

const Input = ({
  type,
  className,
  value,
  onChange,
  placeholder,
  id,
  onBlur,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

export default Input;
