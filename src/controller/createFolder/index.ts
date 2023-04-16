import key from '../../utils/keys';
import robot from 'robotjs';
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const { keyTap, setKeyboardDelay, typeString, mouseClick, moveMouse } = robot;
const date = new Date();
const nameMonth = date.toLocaleDateString('pt-br', { month: 'long' });
const nameYear = date.toLocaleDateString('pt-br', { year: 'numeric' });

const pathFolder = 'C:/Users/evani/Desktop/ContasTeste';

export const createFolder = (nameFolder: string) => {
  setKeyboardDelay(1000);
  keyTap('n', [key.ctrl, key.shift]);

  typeString(nameFolder);

  keyTap('enter');

  keyTap('enter');
};

export const openFolder = () => {
  exec(`start  ${pathFolder}`, async (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.error(err);
      return;
    }
    await passos();
  });
};

export const passos = async () => {
  // keyTap('s', key.wind);

  // typeString(nameItem);

  // setKeyboardDelay(4000);

  // keyTap('enter');

  keyTap('up', key.wind);

  keyTap('a');

  keyTap('enter');

  copy();

  createFolder(`${nameYear}-${nameMonth}`);

  keyTap('enter');

  // robot.setMouseDelay(2);

  // moveMouse(984, 377);
  moveMouse(519, 223);

  keyTap('v', [key.ctrl]);

  const allFiles = (await paths()) as [];

  for (let file of allFiles) {
    await renameFile(file);
  }

  await open();
};

const open = async () => {
  return new Promise((resolve, reject) => {
    keyTap('a', [key.ctrl]);

    mouseClick('right');

    keyTap('down');

    keyTap('enter');

    // mouseClick();
  });
};

const copy = () => {
  keyTap('a', [key.ctrl]);

  keyTap('c', [key.ctrl]);

  keyTap('left', [key.alt]);
};

const paths = () => {
  return new Promise((resolve, reject) => {
    try {
      const caminhoCompleto = path.resolve(pathFolder + `/${nameYear}-${nameMonth}`);
      fs.readdir(caminhoCompleto, (err: any, arquivos: any) => {
        resolve(arquivos);
        // if (err) {
        //   console.error(err);
        // } else {
        //   renameFile(arquivos);
        // }
      });
    } catch (error) {
      reject(error);
    }
  });
};

const renameFile = (file: string) => {
  return new Promise((resolve, reject) => {
    try {
      const name = path.resolve(pathFolder + `/${nameYear}-${nameMonth}/${file}`);
      // const newName = path.resolve(pathFolder + `/${nameYear}-${nameMonth}/${index}${nameMonth}-${file}`);
      const newName = path.resolve(pathFolder + `/${nameYear}-${nameMonth}/${nameMonth}-${file}`);
      console.log(name);
      fs.rename(name, newName, (err: any) => {
        if (err) {
          console.error(err);
        } else {
          resolve(true);
          console.log(`Arquivo ${name} renomeado com sucesso para ${newName}`);
        }
      });
      // files.forEach((element: string, index) => {
      // });
    } catch (error) {
      reject(error);
    }
  });
};

const openFile = (caminhoArquivo: any) => {
  const modo = 'r';

  fs.open(caminhoArquivo, modo, (err: any, fd: any) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Arquivo aberto com sucesso! file descriptor: ${fd}`);
    }
  });
};
