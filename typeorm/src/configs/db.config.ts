import { DataSource } from 'typeorm';
import { envHelper } from '../helpers/env.helper';

export const AppDataSource = new DataSource(envHelper.getTypeOrmOptions());

export const initializeDB = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('Database Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Error during Data Source Connection', err);
    });
};
