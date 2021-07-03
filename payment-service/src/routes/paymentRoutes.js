import express from "express"
import { saveAndPublishTransaction  } from "../controllers/paymentController.js";

const paymentRoute = express.Router();

paymentRoute.post("/transaction", saveAndPublishTransaction)

export default paymentRoute;