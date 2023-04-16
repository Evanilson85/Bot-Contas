import { Router } from 'express';
import { DataControllerReading } from '../controller/dataReadingController';

const router = Router();

router.get('/s26', (req, res) => {
  const data = new DataControllerReading();
  data.executeCreateFolder();
  return res.json('router');
});

export { router };
