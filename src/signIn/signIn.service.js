import { pool } from "../connection.js";

export default class SignInService {
  async signIn(username, hashedPassword) {
    let sql = `SELECT firstName, surName, username, role FROM users WHERE username = ? AND password = ? LIMIT 1`;
    const [[result]] = await pool.query(sql, [username, hashedPassword]);
    return result;
  }

  // async getAdmin(id) {
  //   let sql = `SELECT name, surName FROM admin WHERE id = '${id}'`;
  //   const [[result]] = await pool.query(sql);
  //   return result;
  // }
}
