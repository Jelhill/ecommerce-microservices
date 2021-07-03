import rabbitMQ from "./rabbitMq.js"

export const consumerChannel = (queue) => {
    return new Promise(async (resolve, reject) => {
        try {
            const channel = await rabbitMQ();
            await channel.assertQueue(queue, { durable: true });
            await channel.consume(queue, async (payload) => {
                try {
                    const transaction = JSON.parse(payload.content.toString())
                    if(transaction) {
                        resolve({success: true, data: transaction})
                        console.log(`Received Transaction ${JSON.stringify(transaction)}`);
                    }
                    channel.ack(payload);
                } catch (error) {
                    reject({success: false, message: error})
                }
            }) 
        } catch (error) {
            reject({success: false, message: error})
        }
    })

};
