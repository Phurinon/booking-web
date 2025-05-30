import place from './place.js';
import profile from './profile.js';

import express from 'express';
const router = express.Router();

router.use('/places', place);
router.use('/profile', profile);

export default router;
