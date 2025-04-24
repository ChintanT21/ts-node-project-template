import { Sequelize } from "sequelize";
import { envHelper } from "../helpers/env.helper";

const dbSequelize = new Sequelize(envHelper.GetSequelizeOption());
// coreSequelize.addModels([]);

export { dbSequelize };
