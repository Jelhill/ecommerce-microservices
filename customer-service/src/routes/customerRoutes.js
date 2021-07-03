import express from "express";
import { sendOrder } from "../controllers/customerController.js"
import customerSchema from "../models/customers.js";
const customerRoutes = express.Router();

customerRoutes.get("/getUser", (req, res) => {
    customerSchema.find()
})

customerRoutes.post("/sendOrder", sendOrder)

export default customerRoutes