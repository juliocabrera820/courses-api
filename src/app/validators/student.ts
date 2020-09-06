import { celebrate, Segments, Joi } from 'celebrate'

export const validate = celebrate({
  [Segments.BODY]: Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().trim().email(
      { minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }
    ).required(),
    age: Joi.number().integer('age must be an integer')
      .positive('age must be positive').required()
  })
})
