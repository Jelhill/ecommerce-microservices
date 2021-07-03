import axios from "axios"
import CustomerSchema from "../models/customers.js"
import  services from "../utils/constants.js"
const { orderService, productService } = services
const ORDER_API_ENDPOINT = `http://${orderService.HOST}:${orderService.PORT}/api/order`
const PRODUCT_API_ENDPOINT = `http://${productService.HOST}:${productService.PORT}/api/product`


/**
 Since there is no data comming from the front end
 This function will get the the customer Id from the user DB
 */
function getCustomerId() {
    return CustomerSchema.findOne({})
    .exec()
    .then(data => data._id)
    .catch((err) => err)
}

/**
 * This function will get the product Id by making a request through the product-service
 */
function getProductId(index) {
    return axios.get(`${PRODUCT_API_ENDPOINT}/getProducts`)
    .then((resp) => resp.data[index])
    .catch((err) => err)
}

//This function will send the customer order to the order-service
export async function sendOrder(req, res) {
    const customerId = await getCustomerId(); //Retrieve Customer Id
    const { _id, amount } = await getProductId(1); //Retrieve Product ID
    const order = {
        customerId, 
        productId: _id,
        amount
    }

    axios.post(`${ORDER_API_ENDPOINT}/receiveOrder`, order, )
    .then((resp) => res.status(200).json(resp.data))
    .catch((err) => res.status(500).json({status: false, message: "Server Error!!!!", err}))
}