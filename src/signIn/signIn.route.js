import { Router } from "express";
import * as signIn from "./signIn.controller.js";

const router = Router();

router.post("/", signIn.signIn);
// router.get("/getAdmin", signIn.getAdmin);

export default router;
