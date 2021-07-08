import mongoose from "mongoose"
import dotenv from "dotenv"
import logger from "../utils/logger.js"
import services from "../utils/constants.js"

dotenv.config()

export default mongoose.connect( services.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err, client) => {
        if(err) {
            logger.error("Unable to connect to Database ", err)
            process.exit(1)
        }else{
            logger.info("Database has been connected");
            return client
        }
})
