import rabbitMQ from "./rabbitMq.js"
import { saveToTransactionDatabaseWorker  } from "../worker/updateTransactionDb.js";

/**
 * This function checkes for the queue and based on the queue perforem the necessary requiremet
 */
export const publishChannel =  (queue, payload) => {
	return new Promise(async (resolve, reject) => {

		const channel = await rabbitMQ()
		await channel.assertQueue(queue, { durable: true });
		const submitQueue = await channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), {
			persistent: true,
		});
		
		//Since the queue is transaction
		//the queue is passed as an argument to the worker function which in turn saves the data to the Transaction DB
		if(queue === "transaction") {
			try {
				if(submitQueue) {
					const saveData = await saveToTransactionDatabaseWorker(queue);
					if(!saveData) {
						return reject("Unable to update transaction to transction DB")
					}
					resolve(saveData)
				}
	
			} catch (error) {
				reject({success: false, message: error})
			}
		}
		
		if(queue === "order") {
			try {
				if(submitQueue) {
					resolve(payload)
				}
	
			} catch (error) {
				reject({success: false, message: error})
			}
		}

	})
};

