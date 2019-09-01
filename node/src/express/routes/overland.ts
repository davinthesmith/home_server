import { Router } from 'express';

import { create } from '../controllers/overland'

const router = Router();
router.post('/', create);

export default router;