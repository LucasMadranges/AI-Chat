import React, { FormEventHandler } from 'react';

export default function Input({
  value,
  setValue,
  handleSubmit,
  placeholder,
  disabled,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: FormEventHandler<HTMLInputElement>;
  placeholder: string;
  disabled?: boolean;
}) {
  return (
    <input
      type={'text'}
      className={'border border-gray-200 rounded-lg p-2 shadow my-8 w-full'}
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
      onSubmit={handleSubmit}
      disabled={disabled}
    />
  );
}
