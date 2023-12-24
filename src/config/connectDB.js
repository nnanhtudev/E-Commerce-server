import { Sequelize } from "sequelize";
import "dotenv/config";
// Option 3: Passing parameters separately (other dialects)
const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
