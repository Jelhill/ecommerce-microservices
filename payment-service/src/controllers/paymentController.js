import { publishChannel } from "../libs/publishingChannels.js"
import logger from "../utils/logger.js"
import baseController from "../utils/baseController.js"

const { error, success } = baseController
/**
 * This function receives the order and Publishes the order using a rabbitMQ messaging service.
 * The published order will the be consumed by a worker and then sved into the datanase
 */
export async function saveAndPublishTransaction(req, res) {
    const order = req.body
    await publishChannel("transaction", order)
    .then(async () => {
        await publishChannel("order", order)
        .then((data) => success(res, { success: true, data}))
        .catch((err) => logger.error("Unable to publish order to the queue", err))
    })
    .catch((err) => {
        logger.error("Unable to publish transaction to the messaging queue", err)
        error(res, { code: 500, message: err})
    })
}
