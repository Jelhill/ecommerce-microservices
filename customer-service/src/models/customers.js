import mongoose from "mongoose"

const CustomerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

export default mongoose.model("Customer", CustomerSchema)