import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor='width' className='font-bold block text-lg'>
        Selecione o formato
      </label>
      <select
        value={value}
        onChange={handleChange}
        className='block w-48 mt-1 p-2 border rounded-md text-blue-600'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
