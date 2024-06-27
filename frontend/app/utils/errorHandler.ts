import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); 

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Erro interno do servidor' });
};

export default errorHandler;
