import ReportService from "./report.service.js";

export const createReport = async (req, res, next) => {
  // console.log(req.files);
  // console.log(req.body);
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
