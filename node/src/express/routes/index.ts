import { Router } from 'express'

import { ping } from '../controllers/root';
import overlandRouter from './overland';

const router = Router();
router.get("/", ping)
router.use('/overland', overlandRouter);

export default router;