import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log do erro para debug

  // Verifica se o erro é do tipo ValidationError do Mongoose
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message });
  }

  // Caso não seja um erro conhecido, retorna um erro 500
  return res.status(500).json({ message: 'Erro interno do servidor' });
};

export default errorHandler;
