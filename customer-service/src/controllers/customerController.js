import axios from "axios"
import keys from "../config/keys.js"
import CustomerSchema from "../models/customers.js"
const ORDER_API_ENDPOINT = "http://localhost:3001/api/order"
const PRODUCT_API_ENDPOINT = "http://localhost:5001/api/product"

function getCustomerId() {
    return CustomerSchema.findOne({})
    .exec()
    .then(data => data._id)
    .catch((err) => err)
}

function getProductId(index) {
    return axios.get(`${PRODUCT_API_ENDPOINT}/getProducts` )
    .then((resp) => resp.data[index])
    .catch((err) => err)
}


export async function sendOrder(req, res) {
    const customerId = await getCustomerId()
    const { _id, amount } = await getProductId(0)

    const order = {
        customerId, 
        productId: _id,
        amount
    }

    console.log(order)
    axios.post(`${ORDER_API_ENDPOINT}/receiveOrder`, order, )
    .then((resp) => res.status(200).json(resp.data))
    .catch((err) => res.status(500).json({status: false, message: "Server Error!!!!", err}))
}