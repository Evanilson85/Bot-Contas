import key from '../../../utils/keys';
import robot from 'robotjs';
const { keyTap, setKeyboardDelay, typeString, mouseClick } = robot;

export const createFolder = (nameFolder: string) => {
  //! criar pasta com o bot
  setKeyboardDelay(1000);

  keyTap('n', [key.ctrl, key.shift]);

  typeString(nameFolder);

  keyTap('enter');

  keyTap('enter');
};

export const open = async () => {
  //! abrir arquivos com bot
  return new Promise((resolve, reject) => {
    keyTap('a', [key.ctrl]);

    mouseClick('right');

    keyTap('down');

    keyTap('enter');
  });
};

export const copy = () => {
  //! copiar arquivos com o bot
  keyTap('a', [key.ctrl]);

  keyTap('c', [key.ctrl]);

  keyTap('left', [key.alt]);
};
