import path from "path";
import dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";
import { Entities } from "../configs/entities.config";

class EnvHelper {
  public constructor() {
    const env = process.env.NODE_ENV || "development";
    const envFile = `.env.${env}`;
    dotenv.config({ path: path.resolve(envFile) });
  }

  public getApiPort(): number {
    return parseInt(process.env.API_PORT ?? "3001");
  }


  public getTypeOrmOptions(): DataSourceOptions {
    const options: DataSourceOptions = {
      type: process.env.DB_DIALECT as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: Entities,
      schema: process.env.DB_SCHEMA,
      logging: process.env.DB_LOGGING === 'false',
      synchronize: process.env.TYPEORM_SYNC === 'true',
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    };
    return options;
  }
}

export const envHelper = new EnvHelper();