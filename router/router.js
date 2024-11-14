import express from "express";
import { getdata,homepage } from "../controller/controller.js";

const router =express.Router();

router.get("/",homepage);
router.get("/api/data",getdata);


export default router;