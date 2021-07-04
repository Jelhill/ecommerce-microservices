import express from "express"
import productRoute from "./src/route/productRoute.js"
import logger from "./src/utils/logger.js"
import database from "./src/db/dev.js"


const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({message: "`Server` is working fine"}))
app.use("/api/product", productRoute )

const PORT = process.env.PORT || 5001

app.listen(PORT, function() {
    logger.info(`product-service server started on port ${PORT}`)
})