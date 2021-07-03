import express from "express";
import { sendOrder } from "../controllers/customerController.js"
const customerRoutes = express.Router();

customerRoutes.get("/sendOrder", sendOrder)

export default customerRoutes