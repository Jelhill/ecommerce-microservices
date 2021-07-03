import axios from "axios"
import CustomerSchema from "../models/customers.js"
import  services from "../utils/constants.js"
const { orderService, productService } = services
const ORDER_API_ENDPOINT = `http://${orderService.HOST}:${orderService.PORT}/api/order`
const PRODUCT_API_ENDPOINT = `http://${productService.HOST}:${productService.PORT}/api/product`

function getCustomerId() {
    return CustomerSchema.findOne({})
    .exec()
    .then(data => data._id)
    .catch((err) => err)
}

function getProductId(index) {
    return axios.get(`${PRODUCT_API_ENDPOINT}/getProducts`)
    .then((resp) => {
        console.log("Resp", resp)
        return resp.data[index]})
    .catch((err) => {
        console.log("Error ooo", err)
        return err})
}



export async function sendOrder(req, res) {
    const customerId = await getCustomerId();
    const { _id, amount } = await getProductId(1);
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