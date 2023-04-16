import express from 'express';
import { router } from './router/index';
import { Position } from './utils/positionClick';
import { DataControllerReading } from './controller/dataReadingController';
const readlineSync = require('readline-sync');

const app = express();

let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

const s26 = new DataControllerReading();
s26.executeCreateFolderEdit();

//!const position = new Position();
//! click  position.clickMouse();

app.use(express.json());

app.use(router);

app.listen('3000', () => {
  console.log('servidor rodando');
});

// pegar a posição da tela pelo click e salvar
// depois mudar os campos com o tab
// ler excel com as informações
