import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../constants/common.constant';
import {
  BadRequestException,
  BusinessRuleException,
  ForbiddenException,
  NotFoundException,
  UnauthorizedException,
} from '../dtos/error/base.error';
import { getResponseMessage, translateMessage } from '../helpers/language.helper';
import { ApiResponse } from '../types/response.type';

export const errorHandlingMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  let statusCode: number;
  let message: string;
  let errorResponse: ApiResponse<null>;

  // Using switch-case to handle different types of errors
  switch (true) {
    case err instanceof BusinessRuleException:
      statusCode = HttpStatusCode.UNPROCESSABLE_ENTITY; // 422
      message = err.message || translateMessage('BUSINESS_RULE_VIOLATION');
      break;

    case err instanceof UnauthorizedException:
      statusCode = HttpStatusCode.UNAUTHORIZED; // 401
      message = err.message || translateMessage('UNAUTHORIZED');
      break;

    case err instanceof NotFoundException:
      statusCode = HttpStatusCode.NOT_FOUND; // 404
      message = err.message || getResponseMessage('NOT_FOUND', 'Resource');
      break;

    case err instanceof BadRequestException:
      statusCode = HttpStatusCode.BAD_REQUEST; // 400
      message = err.message || translateMessage('BAD_REQUEST');
      break;

    case err instanceof ForbiddenException:
      statusCode = HttpStatusCode.FORBIDDEN; // 403
      message = err.message || translateMessage(err.message);
      break;

    case err.name === 'SequelizeConnectionRefusedError':
      statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR; // 500
      message = translateMessage('DB_CONNECTION_FAILED');
      break;

    default: {
      statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR; // 500
      message = translateMessage('UNHANDLED_ERROR');
      break;
    }
  }

  // Send a custom error response to the user
  errorResponse = {
    success: false,
    message: message,
  };

  res.status(statusCode).send(errorResponse);
};
