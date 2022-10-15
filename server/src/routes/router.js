import { Router } from 'express';
import roomControler from '../room/roomControler.js';

const router = new Router();

router.get('/room/:id', roomControler.show);

export default router;
