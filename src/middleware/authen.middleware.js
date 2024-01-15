import jwt from "jsonwebtoken";
import { pool } from "../connection.js";
export const auth = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    // console.log(req.headers);
    // console.log(authorization);
    // console.log(typeof authorization);

    if (!authorization || !authorization.startsWith("Bearer")) {
      res.status(401).json({ message: "you are unauthorized level 1" });
    }
    const token = await authorization.split(' ')[1];
    // console.log(token);
    if (!token) {
      res.status(401).json({ message: "you are unauthorized level 2" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const sql = `SELECT name, surName FROM admin WHERE id = '${payload.id}'`;
    const admin = await pool.query(sql);
    if (!admin) {
      res.status(401).json({ message: "you are unauthorized level 3" });
    }
    req.admin = admin;
    next();
  } catch (err) {
    next(err);
  }
};
