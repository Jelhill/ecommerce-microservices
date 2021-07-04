import express from "express"
import paymentRoute from "./src/routes/paymentRoutes.js"
import database from "./src/db/dev.js"
import logger from "./src/utils/logger.js"

database

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/payment", paymentRoute )

const PORT = process.env.PORT || 5000

app.listen(PORT, function() {
    logger.info(`payment-service server started on port ${PORT}`)
})