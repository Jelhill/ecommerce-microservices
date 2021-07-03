import dotenv from "dotenv"
dotenv.config()

const configuration = {
    MONGODB_URI: process.env.MONGODB_URI,
}
console.log(">>>", configuration)

export default configuration;