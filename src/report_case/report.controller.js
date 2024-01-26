import ReportService from "./report.service.js";
import jwt from "jsonwebtoken";

export const createReport = async (req, res, next) => {
  try {
    const result = await new ReportService().createReport(req.body);
    // console.log(req.file);
    res.status(200).send({
      status: "success",
      code: 1,
      message: "create report success",
      cause: "-",
      result
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      code: 0,
      message: err.message,
      cause: "-"
    });
  }
};

export const updateReport = async (req, res) => {
  const { id } = req.body;
  const payload = {
    name: req.body.name,
    detail: req.body.detail,
    cause: req.body.cause,
    status: req.body.status
  };
  const result = await new ReportService().updateReport(id, payload);
  try {
    return res.status(200).send({
      status: "success",
      code: 1,
      message: "update report success",
      cause: "-",
      result
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      code: 1,
      message: err.message,
      cause: "-",
      result
    });
  }
};

export const getAllReport = async (req, res) => {
  const result = await new ReportService().getAllReport();

  try {
    return res.status(200).send({
      status: "get all report success",
      code: 1,
      message: "all data are listed",
      cause: "-",
      result
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      code: 1,
      message: err.message,
      cause: "-",
      result
    });
  }
};

export const getHrReport = async (req, res) => {
  const token = req.headers.authorization;
  const removeBearer = await token.split(" ");
  const decode = jwt.verify(removeBearer[1], process.env.JWT_SECRET_KEY);
  try {
    const result = await new ReportService().getHrReport(decode.role);
    return res.status(200).send({
      status: "hr report success",
      result
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err.message,
      result
    });
  }
};

export const getDevReport = async (req, res) => {
  const token = req.headers.authorization;
  const removeTokenBearer = await token.split(" ");
  const decode = jwt.verify(removeTokenBearer[1], process.env.JWT_SECRET_KEY);
  try {
    const result = await new ReportService().getDevReport(decode.role);
    return res.status(200).send({
      status: "developer report success",
      result
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err.message
    });
  }
};

export const getHr = async (req, res) => {
  const getToken = req.headers.authorization;
  const token = await getToken.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  try {
    const result = await new ReportService().getHr(decoded.role);
    return res.status(200).send({
      message: "you profile is here",
      result
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err.message
    });
  }
};

export const hrCreateReport = async (req, res) => {
  try {
    console.log(req.body);
    const result = await new ReportService().hrCreateReport(req.body);
    return res.status(200).send({
      message: "create report success",
      result
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err.message
    });
  }
};

export const hrUpdateReport = async (req, res) => {
  console.log(req.body);
  const payload = {
    id: req.body.id,
    name: req.body.name,
    cause: req.body.cause,
    detail: req.body.detail,
    status: req.body.status
  };
  try {
    const result = await new ReportService().hrUpdateReport(payload);
    return res.status(200).send({
      status: "success",
      code: 1,
      message: "update report success",
      cause: "-",
      result
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      code: 1,
      message: err.message,
      cause: "-",
      result
    });
  }
};
