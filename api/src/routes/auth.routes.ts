import express, { Router } from 'express'
import { login, logout, register } from '../controllers/auth.controller.js'
import upload from './../utils/multer.ts';

const router: Router = express.Router()

router.route('/register').post(upload.single('photo'), register)
router.route('/login').post(login)
router.route('/logout').post(logout)


export default router