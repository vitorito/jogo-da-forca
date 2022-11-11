import { Router } from 'express';
import roomControler from '../room/roomControler.js';

const router = new Router();

router.get('/room/:id', roomControler.show);
router.post('/room', roomControler.create);

export default router;
