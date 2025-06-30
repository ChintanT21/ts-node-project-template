import express from "express";
import dotenv from "dotenv";
import { indexRouter } from "./routes/index.route";
import path from "path";
import { errorHandlingMiddleware } from "./middlewares/error.middleware";
import { initializeDB } from "./configs/db.config";
import { envHelper } from "./helpers/env.helper";

const PORT = envHelper.getApiPort();

const app = express();
initializeDB()
app.use("/", indexRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Demo on http://localhost:${PORT}/info`);
});
app.use(errorHandlingMiddleware);

console.log("Hello, Node + TypeScript!");

