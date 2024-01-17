import { Router } from "express";
import * as report from "./report.controller.js";
// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // console.log(file);
//     cb(null, "src/assets/images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().getTime() + "." + file.mimetype.split("/")[1]);
//   }
// });
// const upload = multer({ storage });

const router = Router();

router.get("/", report.getAllReport);
router.get("/hrReport", report.getHrReport)
router.post("/create", report.createReport);
router.post("/update", report.updateReport);

// upload.single("test"),
export default router;

// function formatDateToCustom(date) {
//     const day = date.getDate();
//     const month = date.getMonth() + 1; // Note that months are zero-based
//     const year = date.getFullYear() + 543;
//     const hours = date.getHours();
//     const minutes = date.getMinutes();

//     // Convert the numeric month to a two-digit string
//     const formattedMonth = month < 10 ? `0${month}` : `${month}`;

//     // Construct the formatted date string
//     const formattedDate = `${day}/${formattedMonth}/${year} ${hours}.${minutes} น`;

//     return formattedDate;
//   }

//   // Example usage:
//   const currentDate = new Date();
//   const formattedDate = formatDateToCustom(currentDate);
//   console.log(formattedDate);
