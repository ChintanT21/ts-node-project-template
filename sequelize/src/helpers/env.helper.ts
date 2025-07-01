import dotenv from 'dotenv';
import path from 'path';
import { Dialect } from 'sequelize';
import { SequelizeOptions } from 'sequelize-typescript';

class EnvHelper {
  public constructor() {
    const env = process.env.NODE_ENV || 'development';
    const envFile = `.env.${env}`;
    dotenv.config({ path: path.resolve(envFile) });
  }

  public getApiPort = (): number => Number(process.env.API_PORT?.trim()) || 3000;

  public getSequelizeOption(): SequelizeOptions {
    return {
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5433'),
      dialect: process.env.DB_DIALECT as Dialect,
      logging: process.env.DB_LOGGING == 'true',
    };
  }
}

export const envHelper = new EnvHelper();
