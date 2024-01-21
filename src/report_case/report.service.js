import { pool } from "../connection.js";
import { getHrReport } from "./report.controller.js";

export default class ReportService {
  async createReport(data) {
    const { name, detail, cause, error_date, path } = data;

    let reportCase = `INSERT INTO report_case SET name = "${name}", detail = "${detail}", cause = "${cause}", error_date = "${error_date}"`;

    const connection = await pool.getConnection();
    await connection.query(`START TRANSACTION`);

    try {
      const reportCaseId = await connection.query(reportCase, [data]);
      const casePayload = {
        case_id: reportCaseId[0].insertId,
        path
      };

      let casePicture = `INSERT INTO case_picture SET ? `;
      await connection.query(casePicture, [casePayload]);

      await connection.commit();
      await connection.release();

      // fs.unlinkSync(req.file.path);

      return { status: 1 };
    } catch (error) {
      await connection.rollback();
      await connection.release();

      return error;
    }
  }

  async updateReport(id, data) {
    const sql = `UPDATE report_case SET ? WHERE id = '${id}' LIMIT 1`;
    const [result] = await pool.query(sql, [data]);
    return result;
  }

  async getAllReport() {
    const sql = `SELECT * FROM report_case`;
    const [result] = await pool.query(sql);
    return result;
  }

  async getHrReport(user_id) {
    const sql = `SELECT * FROM report_case WHERE user_id = '${user_id}'`;
    const [result] = await pool.query(sql);
    console.log(result);
    return result;
  }

  async getDevReport(user_id) {
    const sql = `SELECT * FROM report_case WHERE user_id = '${user_id}'`;
    const [result] = await pool.query(sql);
    console.log(result);
    return result;
  }
}
