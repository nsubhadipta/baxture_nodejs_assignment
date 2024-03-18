import { Response } from 'express';

export function logErrorAndRespond(res: Response, error: any): void {
    // console.error(error);
    res.status(500).send({
        status: 0,
        message: "Internal Server Error",
        error: error,
    });
}
