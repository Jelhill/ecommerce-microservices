import logger from "../utils/logger.js";
import rabbitMQ from "./rabbitMq.js"

/**
 *  function that helps with consuming queued item on rabbitmq messaging queue
 */
export const consumerChannel = async (queue) => {
    return new Promise(async (resolve, reject) => {
        try {
    
            const channel = await rabbitMQ()
            await channel.assertQueue(queue, { durable: true });
            await channel.prefetch(1);
            let dataToAck = {}
            await channel.consume(queue, (payload) => {
                const transaction = JSON.parse(payload.content.toString())
                if(transaction) {
                    logger.info(`Received Transaction ${JSON.stringify(transaction)}`);
                    resolve(transaction)
                }
                dataToAck = transaction
            })  
            channel.ack(dataToAck)
        } catch (error) {
            logger.error("Unable to consume data", error)
            reject(error)
        }
    })
};
