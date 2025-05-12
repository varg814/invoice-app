import React from "react";
import { InputProps } from "@/types";

const Input = ({
  type,
  className,
  value,
  onChange,
  placeholder,
  id
}: InputProps) => {
  return (
    <input
    id={id}
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
