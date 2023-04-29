import React, { FC, HTMLAttributes, HTMLInputTypeAttribute } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputTypeAttribute> {}

export const Input: FC<InputProps> = ({ itemType, placeholder }) => {
  return (
    <div>
      <input type={itemType} placeholder={placeholder} />
    </div>
  );
};
