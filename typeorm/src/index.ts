import express from 'express';
import { initializeDB } from './configs/db.config';
import { envHelper } from './helpers/env.helper';
import { errorHandlingMiddleware } from './middlewares/error.middleware';
import { indexRouter } from './routes/index.route';

const PORT = envHelper.getApiPort();

const app = express();
initializeDB();
app.use('/', indexRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Demo on http://localhost:${PORT}/info`);
});
app.use(errorHandlingMiddleware);

console.log('Hello, Node + TypeScript!');
