import { Request, Response } from "express";
import { HttpStatusCode } from "../constants/common.constant";
import { ApiResponse, PaginationResponse } from "../types/response.type";

export abstract class BaseController {
  constructor(private readonly controllerName: string) { }

  successResponse = <T>(
    req: Request,
    response: ApiResponse<T> | PaginationResponse<T>,
    res: Response,
    statusCode: number = HttpStatusCode.OK
  ) => {
    res.status(statusCode).send(response);
  };
}
