import express from "express"
import customerRoutes from "./src/routes/customerRoutes.js"
import database from "./src/db/dev.js"
database
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({message: "App is working fine"}))
app.use("/api/customer", customerRoutes );

const PORT = process.env.PORT || 4000


app.listen(PORT, function() {
    console.log("customer-service server started on port " + PORT)
})