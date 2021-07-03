import express from "express";
import axios from "axios"
import { processOrder } from "../controllers/orderController.js"
const orderRoutes = express.Router();

orderRoutes.post("/receiveOrder", processOrder);

export default orderRoutes