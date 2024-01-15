import SignInService from "./signIn.service.js";
import jwt from "jsonwebtoken";
import md5 from "md5";

export const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  const hashedPassword = md5(password);
  try {
    const result = await new SignInService().signIn(username, hashedPassword);
    if (result.length === 0) {
      return res.status(400).json({ message: "fail" });
    }

    const token = jwt.sign(result, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRE_IN
    });
    res.status(200).send({
      result,
      token
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      code: 0,
      message: err.message,
      cause: "Unknown"
    });
  }
  next();
};

export const getAdmin = async (req, res) => {
  try {
    const result = await new SignInService().getAdmin(req.body.id);
    return res.status(200).json({ status: "you found me", result });
  } catch (error) {
    res
      .status(500)
      .json({ status: "try to find harder", message: error.message, result });
  }
};
