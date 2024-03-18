import { Request, Response, NextFunction } from 'express';
import Joi, { Schema } from 'joi';

const middleware = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      res.status(400).json({
        error: message,
        status: 0
      });
    }
  };
};

export default middleware;
