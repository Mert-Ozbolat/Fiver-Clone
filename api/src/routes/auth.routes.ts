import express, { Router } from 'express'
import { login, logout, profile, register } from '../controllers/auth.controller.js'
import upload from './../utils/multer.ts';
import protect from '../middleware/protect.ts';

const router: Router = express.Router()

router.route('/register').post(upload.single('photo'), register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/profile').get(protect, profile)


export default router