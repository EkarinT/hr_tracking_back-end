import { createPool } from "mysql2";
import config from "./config.js";

const { db } = config;

const pool = createPool(db).promise();

export { pool };
