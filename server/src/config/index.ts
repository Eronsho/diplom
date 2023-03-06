import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env}` });

export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const {
  DB_NAME,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,

  SECRET_KEY,
} = process.env;
