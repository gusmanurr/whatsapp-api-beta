// Port number
const PORT = process.env.PORT || '3333'
// Enable or disable mongodb
const MONGODB_ENABLED = !!(process.env.MONGODB_ENABLED && process.env.MONGODB_ENABLED === "true");
// URL of the Mongo DB
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/WhatsAppInstance';
// Enable or disable webhook globally on project
const WEBHOOK_ENABLED = !!(process.env.WEBHOOK_ENABLED && process.env.WEBHOOK_ENABLED === "true");
// Webhook URL
const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://webhook.site/d0122a66-18a3-432d-b63f-4772b190dd72'
// Receive message content in webhook (Base64 format)
const WEBHOOK_BASE64 = !!(process.env.WEBHOOK_BASE64 && process.env.WEBHOOK_BASE64 === "true");

module.exports = {
    port: PORT,
    mongoose: {
        enabled: MONGODB_ENABLED,
        url: MONGODB_URL,
        options: {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    webhookEnabled: WEBHOOK_ENABLED,
    webhookUrl: WEBHOOK_URL,
    webhookBase64: WEBHOOK_BASE64,
}
