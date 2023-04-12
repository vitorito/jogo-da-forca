import { Router } from 'express';
import roomControler from '../room/roomControler.js';

const router = new Router();

router.get('/room', roomControler.index);
router.get('/room/:id', roomControler.show);
router.post('/room/:id', roomControler.join);

router.all('*', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

export default router;
