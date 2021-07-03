import mongoose from "mongoose"
import keys from "../config/keys.js"
import dotenv from "dotenv"
dotenv.config()

export default mongoose.connect( keys.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err, client) => {
        if(err) {
            console.log(err)
            process.exit(1)
        }else{
            console.log("Database has been connected");
            return client
        }
})
