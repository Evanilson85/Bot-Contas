import { Router } from 'express';
import { Position } from '../utils/positionClick';

const router = Router();

router.get('/', (req, res) => {
  const teste = new Position();
  // teste.execute();
  return res.json('router');
});

export { router };
