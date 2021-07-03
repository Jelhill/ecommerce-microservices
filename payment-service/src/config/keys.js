import dotenv from "dotenv"
dotenv.config()

const configuration = {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET
}


export default configuration;