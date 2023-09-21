import React, { InputHTMLAttributes } from "react";

function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className="block  w-full p-2 border mb-3 rounded outline-none focus:border-blue-500 focus:ring-2 transition-all"
    />
  );
}

export default Input;
