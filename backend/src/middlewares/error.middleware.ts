import type { Request, Response, NextFunction } from 'express';


export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {

    console.error(err);

    const status = err.status || 400;
    const message = err.message || 'Erro inesperado';

    res.status(status).json({ message });

}