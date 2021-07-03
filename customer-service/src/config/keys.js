import dotenv from "dotenv"
dotenv.config()

const configuration = {
    MONGODB_URI: process.env.MONGODB_URI,
}

export default configuration;