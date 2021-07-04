import productSchema from "../model/product.js"
import baseController from "../utils/baseController.js"
const { error, success } = baseController
/**
 * This function gets all the products in the product database
 */
export function getProducts(req, res) {
    return productSchema.find({})
    .exec()
    .then((data) => success(res, data ))
    .catch((err) => error(res, { code: 400, message: "Unable to get Products"}))
}