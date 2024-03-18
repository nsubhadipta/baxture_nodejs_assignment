import Joi from 'joi';

const userSchema = {
  userAdd: Joi.object({
    username: Joi.string().max(50).required(),
    age: Joi.number().integer().positive().required(),
    hobbies: Joi.array().items(Joi.string()).default([]),
  }),

  userEdit: Joi.object({
    username: Joi.string().max(50).required(),
    age: Joi.number().integer().positive().required(),
    hobbies: Joi.array().items(Joi.string()).required(),
  }),
};

export default userSchema;
