import Customer from "../models/customers.js"
import client from "../db/dev.js"
client

const customer = new Customer({
    firstname: "Jelili",
    lastname: "Umaru"
})

customer.save().then(() => {
    process.exit(1)
})

