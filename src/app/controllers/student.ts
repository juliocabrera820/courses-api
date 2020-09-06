import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Student } from '@models/student'

class StudentController {
  async index (req: Request, res: Response): Promise<Response> {
    try {
      const students = await getRepository(Student).find({ relations: ['courses'] })
      return res.status(200).json(students)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async create (req: Request, res: Response): Promise<Response> {
    try {
      const { firstName, lastName, email, age } = req.body
      const student = getRepository(Student).create({ firstName, lastName, email, age })
      await getRepository(Student).save(student)
      return res.status(200).json(student)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new StudentController()
