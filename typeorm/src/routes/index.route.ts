import { Request, Response, Router } from "express";
import { HttpStatusCode } from "../constants/common.constant";
import { notFoundResponse } from "../helpers/common.helper";
import { asyncWrap } from "../helpers/common.helper";
import infoRouter from "./info.route";
const router: Router = Router();

router.use("/info", asyncWrap(infoRouter));

//not found route
router.use((req: Request, res: Response) => {
  res.status(HttpStatusCode.NOT_FOUND).send(notFoundResponse());
});

export const indexRouter = router;
