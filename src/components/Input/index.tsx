import React, { FC, HTMLAttributes, HTMLInputTypeAttribute } from 'react';
export interface InputProps extends HTMLAttributes<HTMLInputTypeAttribute> {
  label?: string;
}

export const Input: FC<InputProps> = ({ itemType, placeholder, label }) => {
  return (
    <div className={`w-full`}>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="input"
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="input"
        type={itemType}
        placeholder={placeholder}
      />
    </div>
  );
};
