import rabbitMQ from "./rabbitMq.js"

export const producerChannel = async (queue, payload) => {
    const channel = await rabbitMQ()
	await channel.assertQueue(queue, { durable: true });
	await channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), {
		persistent: true
	});
    console.log(`Order has been sent to the queue ${JSON.stringify(payload)}`);
	return { sucess: true, payload: JSON.stringify(payload)}

};