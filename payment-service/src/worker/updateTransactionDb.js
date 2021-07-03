import Transaction from "../service/Transaction.js"
import { consumerChannel } from "../libs/consumerChannel.js"

export function saveTransaction(data) {
    new Transaction(data)
    .updateDatabaseTable()
    .then((payload) => payload)
    .catch((err) => err)
}



export function saveToTransactionDatabaseWorker(queue){
    return new Promise(async (resolve, reject) => {
        try {
            const consumer = await consumerChannel(queue)
            if(consumer) {
                const trans = await new Transaction(consumer).updateDatabaseTable();
                resolve(trans)
            }
        } catch (error) {
            reject({success: false, message: error})
        }
    })

};
