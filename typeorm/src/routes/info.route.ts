import { Router } from 'express';
import { infoController } from '../controllers/info.controller';
import { asyncWrap } from '../helpers/common.helper';

const infoRouter = Router();

infoRouter.get('/', asyncWrap(infoController.getInfo));

export default infoRouter;
