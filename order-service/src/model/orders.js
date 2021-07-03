import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "false"
    }
})

export default mongoose.model("Order", OrderSchema)