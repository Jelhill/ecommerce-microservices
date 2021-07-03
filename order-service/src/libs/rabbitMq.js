import amqp from "amqplib";

export default async function connectRabbitMq() {
    try {
        const amqpServer = "amqp://rabbitmq:5672"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        return channel
    }
    catch (ex){
        console.error(ex)
    }

}