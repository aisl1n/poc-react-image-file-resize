import Resizer from 'react-image-file-resizer';

export const resizeImage = async (
  file: File,
  maxWidth?: number,
  maxHeight?: number,
  compressFormat?: string
): Promise<string> => {
  const mxWidth = maxWidth || 600
  const mxHeight = maxHeight || 400
  const format = compressFormat || 'JPEG';
  return new Promise<string>((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      mxWidth,
      mxHeight,
      format,
      100,
      0,
      (uri) => {
        resolve(uri as string);
      }
    );
  });
};
