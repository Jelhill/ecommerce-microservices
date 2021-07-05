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
    orderStatus: {
        type: String,
        required: true,
        default: "pending"
    }
})

export default mongoose.model("Order", OrderSchema)
