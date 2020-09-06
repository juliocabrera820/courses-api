import { Router } from 'express'
import StudentController from '@controllers/student'

const router = Router()
router.get('/students', StudentController.index)
router.post('/students', StudentController.create)

export default router
