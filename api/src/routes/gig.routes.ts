import express, { Router } from 'express'
import { createGig, deleteGig, getAllGigs, getGig } from '../controllers/gig.controller.ts'

const router: Router = express.Router()

router.route('/').get(getAllGigs).post(createGig)
router.route('/:id').get(getGig).delete(deleteGig)


export default router