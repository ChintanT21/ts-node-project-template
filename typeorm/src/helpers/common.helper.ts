import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ApiResponse } from '../types/response.type';
import { getResponseMessage } from './language.helper';

export const asyncWrap = (requestHandler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

export const notFoundResponse = (): ApiResponse<null> => {
  const res: ApiResponse<null> = {
    success: false,
    message: getResponseMessage('NOT_FOUND', 'ROUTE'),
  };
  return res;
};
