import { envHelper } from "../helpers/env.helper";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource(envHelper.getTypeOrmOptions());

export const initializeDB = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("Database Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Error during Data Source Connection", err);
    });
};
