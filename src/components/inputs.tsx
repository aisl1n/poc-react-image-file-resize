interface InputsProps {
  onChangeWidthFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeHeightFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeImageFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputs: React.FC<InputsProps> = ({
  onChangeWidthFunction,
  onChangeHeightFunction,
  onChangeImageFunction,
}) => {
  return (
    <>
      <label htmlFor='width' className='font-bold mt-4 block text-lg'>
        Largura máxima
      </label>
      <input
        type='number'
        className='text-blue-600 rounded p-1'
        onChange={onChangeWidthFunction}
      />

      <label htmlFor='heigth' className='font-bold mt-4 block text-lg'>
        Altura máxima
      </label>
      <input
        type='number'
        className='text-blue-600 rounded p-1'
        onChange={onChangeHeightFunction}
      />

      <div className='p-8'>
        <label
          htmlFor='file-upload'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 rounded'
        >
          Selecionar imagem
        </label>
        <input
          id='file-upload'
          type='file'
          className='hidden'
          onChange={onChangeImageFunction}
        />
      </div>
    </>
  );
};
