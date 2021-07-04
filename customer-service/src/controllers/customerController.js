import axios from "axios"
import CustomerSchema from "../models/customers.js"
import  services from "../utils/constants.js"
import { customer, products } from "../data/hardcoded.js"
import logger from "../utils/logger.js"
import baseController from "../utils/baseController.js"
const { orderService, productService } = services
const ORDER_API_ENDPOINT = `http://${orderService.HOST}:${orderService.PORT}/api/order`
const PRODUCT_API_ENDPOINT = `http://${productService.HOST}:${productService.PORT}/api/product`
const { error, success} = baseController

/**
 Since there is no data comming from the front end
 This function will get the the customer Id from the user DB
 */
function getCustomerId() {
    return CustomerSchema.findOne({})
    .exec()
    .then(data => data._id)
    .catch(err => {
        logger.error("Unable to get Customer Data", err)
        return err 
    })
}

/**
 * This function will get the product Id by making a request through the product-service
 */
function getProductId(index) {
    return axios.get(`${PRODUCT_API_ENDPOINT}/getProducts`)
    .then((resp) => resp.data[index])
    .catch(err => {
        logger.error("Unable to get Products from Database", err)
        return err 
    })
}


/**
    This function will send the customer order to the order-service
    First it will attemp to retrieve the seeded data from the DB
    If unsuccessful, it will use hard coded data to populate as user request and send to the order service
 */
export async function sendOrder(req, res) {

    let order = {}

    const customerId = await getCustomerId(); //Retrieve Customer Id
    const { _id, amount } = await getProductId(1); //Retrieve Product ID

    if(!customerId || !_id || amount ) {
        order = {
            customerId: customer._id,
            productId: products[1]._id,
            amount: products[1].amount
        }
    }else {
        order = { customerId, productId: _id, amount}
    }
    

    axios.post(`${ORDER_API_ENDPOINT}/receiveOrder`, order)
    .then((resp) => success(res, resp.data))
    .catch((err) => {
        logger.error("Unable to connect to ORDER-SERVICE", err)
        error(res, { code: 500, status: false, message: "Unable to connect to ORDER-SERVICE", err })
    })
}