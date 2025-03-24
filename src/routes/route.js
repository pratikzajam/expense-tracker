import express from 'express';
const router = express.Router();
import {shortUrl,redirect,signUp} from '../controllers/controller.js'

router.post('/shorturl', shortUrl);
router.get('/:id', redirect);
router.post('/signup', signUp);

export default router;