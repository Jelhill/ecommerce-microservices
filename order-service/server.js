import express from "express";
import orderRoutes from "./src/route/orderRoute.js";
import database from "./src/db/dev.js"
database

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({message: "Server is working fine"}))
app.use("/api/order", orderRoutes );

const PORT = process.env.PORT || 3001

app.listen(PORT, function() {
    console.log("order-service server started on port 3001")
})