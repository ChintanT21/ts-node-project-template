import express from 'express';
import { dbSequelize } from './configs/db.config';
import { envHelper } from './helpers/env.helper';
import { errorHandlingMiddleware } from './middlewares/error.middleware';
import { indexRouter } from './routes/index.route';

const PORT = envHelper.getApiPort();

(async () => {
  await dbSequelize.authenticate();
  console.debug('Database Connection has been established successfully.');
})();

const app = express();
app.use('/', indexRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Demo on http://localhost:${PORT}/info`);
});
app.use(errorHandlingMiddleware);

console.log('Hello, Node + TypeScript!');
