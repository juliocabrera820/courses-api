import { Router } from 'express'
import StudentController from '@controllers/student'
import { validate } from '@validators/student'

const router = Router()
router.get('/students', StudentController.index)
router.post('/students', validate, StudentController.create)

export default router
