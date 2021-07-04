import orderSchema from "../model/orders.js"
import axios from "axios"
import  services from "../utils/constants.js"
import logger from "../utils/logger.js"
import baseController from "../utils/baseController.js"

const { error, success } = baseController
const { paymentService } = services
const PAYMENT_SERVICE_URL = `http://${paymentService.HOST}:${paymentService.PORT}/api/payment`

/**
 * Order constructor
 */
function Order(data) {
    this.data = data;
}

/*Function that Saves the constomer order to the database
*/
Order.prototype.saveOrder = function() {
    return new Promise(async (resolve, reject) => {
        const saveData = await orderSchema(this.data).save()
        if(!saveData) {
            logger.error("Unable to save order")
            return reject("Server Error!!, Unable to save order")
        }   
        resolve(saveData)
    })
}


/**
 * 
 * Here the customer order is saved to the database
 * After the order is saved, the order with updated payload is sent to the Payment Service
 * Via resful base communication
 */
export function processOrder(req, res) {
    new Order(req.body)
    .saveOrder()
    .then(async (order) => {
        axios.post(`${PAYMENT_SERVICE_URL}/transaction`, order)
        .then((data) => success(res, data.data.data.data))
        .catch((err) => {
            logger.error("Failed to connect to Payment Service", err)
            error(res, {code: 500, success: false, message: "Failed to connect to Payment Service"})
        })
    })
    .catch((err) => {
        logger.error("Unable to save order to order database", err)
        error(res, { code: 400, success: false, message: "Server Error"});
    })
}