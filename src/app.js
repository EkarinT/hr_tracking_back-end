import express from "express";
import cors from "cors";
import reportRouter from "./report_case/report.route.js";
import signInRouter from "./signIn/signIn.route.js";
import { auth } from "./middleware/authen.middleware.js";

const app = express();

// app.use(cors(["http://localhost:3000"]));
app.use(cors());
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", signInRouter);
app.use("/report", auth, reportRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
