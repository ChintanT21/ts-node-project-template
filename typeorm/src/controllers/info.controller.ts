import { Request, Response } from 'express';
import { ApiResponse } from '../types/response.type';
import { BaseController } from './base.controller';

class InfoController extends BaseController {
  constructor() {
    super(InfoController.name);
  }

  getInfo = async (req: Request, res: Response): Promise<void> => {
    const response: ApiResponse<null> = {
      success: true,
      message: 'Request received',
      data: null,
    };
    this.successResponse(req, response, res);
  };
}

export const infoController = new InfoController();
