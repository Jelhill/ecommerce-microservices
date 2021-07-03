import client from "../db/dev.js"
client

import Product from "../model/product.js"

const products = [   
    new Product({name: "Bicycle", amount: 20000 }),
    new Product({name: "Fridge", amount: 35000 }),
]

 function seedCustomer(products) {
    return new Promise(async (resolve, reject) => {
        let counter = 0
        for(let i = 0; i < products.length; i++) {
             const saveProduct = await products[i].save();
             if(saveProduct) {
                 counter += 1
             }
        } 
        console.log("COUNTER", counter)
        if(counter === products.length) {
            resolve(true)
        }else{
            reject(false)
        }
    })
}

seedCustomer(products).then(() => {
    process.exit(1)
})



