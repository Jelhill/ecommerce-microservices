import { publishChannel } from "../libs/publishingChannels.js"


/**
 * This function receives the order and Publishes the order using a rabbitMQ messaging service.
 * The published order will the be consumed by a worker and then sved into the datanase
 */
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
