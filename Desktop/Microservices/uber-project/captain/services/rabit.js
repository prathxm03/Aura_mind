const dotenv = require('dotenv');
dotenv.config();
const amqp = require('amqplib');

let channel = null;
let connection = null;

const RABBITMQ_URL = process.env.RABBITMQ_URL

async function connectRabbitMQ() {
    if (channel) return channel;
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    console.log('Connected to RabbitMQ');
    return channel;
}

async function publishToQueue(queueName, message) {
    const ch = await connectRabbitMQ();
    await ch.assertQueue(queueName, { durable: true });
    ch.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), { persistent: true });
}

async function subscribeToQueue(queueName, callback) {
    const ch = await connectRabbitMQ();
    await ch.assertQueue(queueName, { durable: true });
    ch.consume(queueName, (msg) => {
        if (msg !== null) {
            const content = JSON.parse(msg.content.toString());
            callback(content);
            ch.ack(msg);
        }
    });
}

module.exports = {
    publishToQueue,
    subscribeToQueue,
    connectRabbitMQ
};