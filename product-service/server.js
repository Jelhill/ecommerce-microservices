import express from "express"
import productRoute from "./src/route/productRoute.js"
import database from "./src/db/dev.js"
database

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/product", productRoute )

const PORT = process.env.PORT || 5001

app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`)
})