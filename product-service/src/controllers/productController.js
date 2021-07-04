import productSchema from "../model/product.js"

/**
 * This function gets all the products in the product database
 */
export function getProducts(req, res) {
    return productSchema.find({})
    .exec()
    .then((data) => res.status(200).json(data) )
    .catch((err) => res.status(400).json({ message: "Unable to get Products"}))
}