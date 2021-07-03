import mongoose from "mongoose"

const TransactionSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    orderId: {
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
})

export default mongoose.model("Transaction", TransactionSchema)