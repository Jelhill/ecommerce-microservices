import amqp from "amqplib";
import logger from "../utils/logger.js";

export default async function connectRabbitMq() {
    try {
        const amqpServer = "amqp://rabbitmq:5672"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        return channel
    }
    catch (err){
        logger.error("Unable to connect to rabbitmq Server", err)
    }

}