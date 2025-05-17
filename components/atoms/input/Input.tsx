import React from "react";
import { InputProps } from "@/types";

const Input = ({
  type,
  className,
  value,
  onChange,
  placeholder,
<<<<<<< HEAD
  id
}: InputProps) => {
  return (
    <input
    id={id}
=======
  id,
  onBlur,
}: InputProps) => {
  return (
    <input
      id={id}
>>>>>>> recover local changes
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
<<<<<<< HEAD
=======
      onBlur={onBlur}
>>>>>>> recover local changes
    />
  );
};

export default Input;
