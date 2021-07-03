import { publishChannel } from "../libs/publishingChannels.js"

export async function saveAndPublishTransaction(req, res) {
    const order = req.body
    await publishChannel("transaction", order)
    .then(async () => {
        await publishChannel("order", order)
        .then((data) => {
            res.status(200).json({ success: true, data})
        })
        .catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        res.status(404).json(err)
    })
}

















































// const config = require("../config/settings");
// const serviceLocator = require("../config/di");
// const logger = serviceLocator.get("logger");
// const { sendNotification } = require("../utils/pushNotification");
// const { consumerChannel } = require("../utils/consumerChannel");
// const consumerQueue = config.rabbitMq.queues.notificationWorker;

// exports.pushNotificationWorker = async () => {
//     try {
//         const channel = await consumerChannel(consumerQueue);
//         channel.consume(consumerQueue, async payLoad => {
//             try {
//                 const message = JSON.parse(payLoad.content.toString());
//                 if (message.fcmTokens.length > 0) {
//                     await sendNotification(message);
//                 }
//                 channel.ack(payLoad);
//             } catch (error) {
//                 logger.error("An error occurred - ", error);
//             }
//         });
//     } catch (error) {
//         logger.error("An error occurred - ", error);
//     }
// }