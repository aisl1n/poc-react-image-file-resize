# Setup

Instalar a biblioteca:

```
npm i react-image-file-resizer
```

ou

```
yarn add react-image-file-resizer
```

# Uso

```
import Resizer from "react-image-file-resizer";
```

```js
Resizer.imageFileResizer(
file, // Is the file of the image which will resized.
maxWidth, // Is the maxWidth of the resized new image.
maxHeight, // Is the maxHeight of the resized new image.
compressFormat, // Is the compressFormat of the resized new image.
quality, // Is the quality of the resized new image.
rotation, // Is the degree of clockwise rotation to apply to uploaded image.
responseUriFunc, // Is the callBack function of the resized new image URI.
outputType, // Is the output type of the resized new image.
minWidth, // Is the minWidth of the resized new image.
minHeight // Is the minHeight of the resized new image.
);
```
# Exemplo

## Primeiro, envolva o redimensionador
```js
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
new Promise((resolve) => {
Resizer.imageFileResizer(
file,
300,
300,
"JPEG",
100,
0,
(uri) => {
resolve(uri);
},
"base64"
);
});
```

## E depois utilize com uma async function:

```js
const onChange = async (event) => {
  try {
    const file = event.target.files[0];
    const image = await resizeFile(file);
    console.log(image);
  } catch (err) {
    console.log(err);
  }
};
```

# Opções e suas descrições, tipos e obrigatoriedades 

| Option            | Description                                              | Type     | Required |
|-------------------|----------------------------------------------------------|----------|----------|
| file              | Path of image file                                      | object   | Yes      |
| maxWidth          | New image max width (ratio is preserved)                 | number   | Yes      |
| maxHeight         | New image max height (ratio is preserved)                | number   | Yes      |
| compressFormat    | Can be either JPEG, PNG or WEBP.                        | string   | Yes      |
| quality           | A number between 0 and 100. Used for the JPEG compression. (if no compress is needed, just set it to 100) | number   | Yes      |
| rotation          | Degree of clockwise rotation to apply to the image. Rotation is limited to multiples of 90 degrees. (if no rotation is needed, just set it to 0) (0, 90, 180, 270, 360) | number   | Yes      |
| responseUriFunc   | Callback function of URI. Returns URI of resized image's base64 format. ex: uri => {console.log(uri)}); | function | Yes      |
| outputType        | Can be either base64, blob or file. (Default type is base64) | string   | No       |
| minWidth          | New image min width (ratio is preserved, defaults to null) | number   | No       |
| minHeight         | New image min height (ratio is preserved, defaults to null) | number   | No       |