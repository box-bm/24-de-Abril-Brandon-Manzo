import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const databaseUrl = process.env.DATABASE_URL;

const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
});

export const initConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.dropAllSchemas();
    await sequelize.drop();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
