import Resizer from 'react-image-file-resizer';

export const resizeImage = async (
  file: File,
  maxWidth?: number,
  maxHeight?: number,
  compressFormat?: string,
  compressQuality?: number
): Promise<string> => {
  const mxWidth = maxWidth || 600;
  const mxHeight = maxHeight || 400;
  const format = compressFormat || 'JPEG';
  const quality = compressQuality || 100;
  return new Promise<string>((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      mxWidth,
      mxHeight,
      format,
      quality,
      0,
      (uri) => {
        console.log('qualidade setada: ' + quality);
        resolve(uri as string);
      }
    );
  });
};
