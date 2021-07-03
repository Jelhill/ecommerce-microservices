import express from "express";
import orderRoutes from "./src/route/orderRoute.js";
import database from "./src/db/dev.js"
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/api/order", orderRoutes );

const PORT = process.env.PORT || 3001

app.listen(PORT, function() {
    console.log("Server started on port 3001")
})