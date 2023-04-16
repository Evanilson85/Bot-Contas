import { InitFileS26 } from '../files/s26';
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const readlineSync = require('readline-sync');

const date = new Date();
const nameMonth = date.toLocaleDateString('pt-br', { month: 'long' });
const nameYear = date.toLocaleDateString('pt-br', { year: 'numeric' });
const pathFolder = 'C:/Users/evani/Desktop/ContasTeste/';
const pathFolderCopy = 'C:/Users/evani/Desktop/ContasTeste/Arquivos';

export const openFolder = (pathFolderAndFile: string) => {
  //! abrir minha pasta e executar a função executeMain

  exec(`start  ${pathFolderAndFile}`, async (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.error(err);
      return;
    }

    if (readlineSync.keyInYN('Criar Pasta do mes atual?')) {
      console.log('sim...');
      await executeMain(`${nameYear}-${nameMonth}`);
    } else {
      let nameMonth = readlineSync.question('Digite o nome do mes? ');
      console.log(`Criando arquivos com o nome ${nameMonth}`);
      await executeMain(`${nameYear}-${nameMonth}`);
    }
  });
};

const executeMain = async (nameYearDefault: string) => {
  //! executar as função

  createFolderNode(nameYearDefault);

  const allFiles = (await paths(`${pathFolder}/Arquivos`)) as [];

  for (let file of allFiles) {
    console.log(file, '-----------------');
    await copyFilesPath(file, nameYearDefault);
  }

  await openFiles(`${pathFolder}${nameYearDefault}/S-26_T.pdf`);

  InitFileS26(nameYearDefault.split('-')[1]);

  //? esse codigo vai percorrer a minha pasta criada e abrir todos os arquivos
  //! const allFile = (await paths(`${pathFolder}/${nameYear}-${nameMonth}`)) as [];
  //! for (let item of allFile) {
  //!   await openFolder(`${pathFolder}${nameYear}-${nameMonth}/${item}`);
  //! }
};

const copyFilesPath = (file?: string, nameFolder?: string) => {
  //! copiar e colar arquivos na nova pasta
  return new Promise((resolve, reject) => {
    try {
      fs.copyFile(`${pathFolderCopy}/${file}`, `${pathFolder}${nameFolder}/${file}`, (err: any) => {
        if (err) throw err;
        console.log('Arquivo copiado com sucesso!');
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const createFolderNode = (name?: string) => {
  //! criar pasta nova
  try {
    fs.mkdirSync(name ? `${pathFolder}${name}` : `${pathFolder}${nameYear}-${nameMonth}`);
    console.log('Pasta criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar pasta: ', err);
  }
};

const openFiles = (pathFolderAndFile: string) => {
  //! Abrir o meu arquivo
  exec(`start  ${pathFolderAndFile}`, async (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const paths = (pathItems: string) => {
  //! retorna todos os arquivos da pasta em []
  return new Promise((resolve, reject) => {
    try {
      const caminhoCompleto = path.resolve(pathItems);
      fs.readdir(caminhoCompleto, (err: any, arquivos: any) => {
        resolve(arquivos);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const renameFile = (file: string) => {
  //! renomear nomes de arquivos
  return new Promise((resolve, reject) => {
    try {
      const name = path.resolve(pathFolder + `/${nameYear}-${nameMonth}/${file}`);
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
    } catch (error) {
      reject(error);
    }
  });
};
