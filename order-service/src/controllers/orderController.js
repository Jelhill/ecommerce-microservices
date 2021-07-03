import orderSchema from "../model/orders.js"
import axios from "axios"
import  services from "../utils/constants.js"
const { paymentService, orderService, productService, customerService} = services
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
        .then((data) => res.status(200).json(data.data))
        .catch((err) => res.status(400).json({success: false, message: "Failed"}))
    })
    .catch((err) => res.status(500).json({success: false, message: "Server Error"}))
}