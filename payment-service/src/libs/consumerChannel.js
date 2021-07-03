import rabbitMQ from "./rabbitMq.js"

export const consumerChannel = async (queue) => {
    return new Promise(async (resolve, reject) => {
        try {
            const channel = await rabbitMQ()
            await channel.assertQueue(queue, { durable: true });
            await channel.prefetch(1);
            await channel.consume(queue, (payload) => {
                const transaction = JSON.parse(payload.content.toString())
                if(transaction) {
                    console.log(`Received Transaction ${JSON.stringify(transaction)}`);
                    resolve(transaction)
                }
            })  
        } catch (error) {
            reject(error)
        }
    })

};
