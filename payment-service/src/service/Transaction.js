import TransactionSchema from "../model/transaction.js"

function Transaction(data) {
    this.data = data
}

Transaction.prototype.updateDatabaseTable = function() {
    const { customerId, productId, amount, _id }   = this.data;
    return new Promise((resolve, reject) => {
        new TransactionSchema({ customerId, productId, amount, orderId: _id })
        .save()
        .then((data) => resolve(data) )
        .catch((err) =>  reject(err))
    })
}

export default Transaction