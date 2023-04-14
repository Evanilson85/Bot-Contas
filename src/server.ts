import express from 'express';
import { router } from './router/index';
import { Position } from './utils/positionClick';

const app = express();
const position = new Position();

// position.clickMouse();
position.mouseClickWrite();

// position.execute();

app.use(express.json());

app.use(router);

app.listen('3000', () => {
  console.log('servidor rodando');
});

// pegar a posição da tela pelo click e salvar
// depois mudar os campos com o tab
// ler excel com as informações
