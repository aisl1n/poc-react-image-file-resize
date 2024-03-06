import Image from 'next/image';
import { Inputs } from '@/components/inputs';
import { ChangeEvent, useState } from 'react';
import { resizeImage } from '@/utils/image-utils';
import DefaultLayout from '@/layout/defaultLayout';
import { Select } from '@/components/select';

export default function ImageCompresser() {
  const [originalImage, setOriginalImage] = useState<string>('');
  const [resizedImage, setResizedImage] = useState<
    string | Blob | File | ProgressEvent<FileReader>
  >();
  const [maxWidth, setMaxWidth] = useState<number>(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [selectedFormat, setSelectedFormat] = useState('option1');

  async function onChangeImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      setOriginalImage(URL.createObjectURL(file as Blob));
      setResizedImage(
        await resizeImage(file, maxWidth, maxHeight, selectedFormat)
      );
    }
  }

  const options = [
    { value: 'JPEG', label: 'JPEG' },
    { value: 'PNG', label: 'PNG' },
    { value: 'WEBP', label: 'WEBP' },
  ];

  const handleChange = (value: string) => {
    setSelectedFormat(value);
  };

  function onChangeWidth(e: ChangeEvent<HTMLInputElement>) {
    setMaxWidth(Number(e.target.value));
  }

  function onChangeHeight(e: ChangeEvent<HTMLInputElement>) {
    setMaxHeight(Number(e.target.value));
  }

  return (
    <main className='flex min-h-screen flex-col items-center p-10'>
      <Select
        options={options}
        value={selectedFormat}
        onChange={handleChange}
      />
      <Inputs
        onChangeHeightFunction={onChangeHeight}
        onChangeWidthFunction={onChangeWidth}
        onChangeImageFunction={onChangeImage}
      />
      <div className='flex flex-row m-10'>
        <div>
          <h3 className='font-black'>IMAGEM ORIGINAL</h3>
          <Image
            src={originalImage}
            alt='imagem original'
            width={600}
            height={400}
            className='border-blue-700 rounded-lg mt-10 border-2'
          />
        </div>
        <div>
          <h3 className='font-black'>IMAGEM TRATADA</h3>
          <Image
            src={resizedImage as string}
            alt='imagem tratada'
            width={600}
            height={400}
            className='border-blue-700 rounded-lg mt-10 border-2'
          />
        </div>
      </div>
    </main>
  );
}

ImageCompresser.getLayout = DefaultLayout;
