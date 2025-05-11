import React from "react";
import { InputProps } from "@/types";

const Input = ({
  type,
  className,
  value,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
