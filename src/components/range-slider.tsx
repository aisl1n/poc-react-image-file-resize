import React from 'react';

interface RangeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value, 10));
  };

  return (
    <div className='flex flex-col items-center pt-4'>
      <div>
        <span
          className='
         font-bold text-lg p-2 m-2'
        >
          Qualidade:
        </span>
        <span className='text-blue-400 font-bold text-lg'>{value}</span>
      </div>
      <input
        type='range'
        min='0'
        max='100'
        step='1'
        value={value}
        onChange={handleChange}
        className='w-64 h-4 bg-gray-300 rounded-full appearance-none outline-none'
      />
    </div>
  );
};
