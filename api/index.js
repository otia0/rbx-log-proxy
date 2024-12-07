const axios = require('axios');

const discordWebhook = process.env.DISCORD_WEBHOOK || 'https://discord.com/api/webhooks/1314920326760628236/FgrBtbS0nsHVAOWFSkuIgfLzU1ADpRZvYs86UdZFuaCHXvjMSNqcxyP6gGKZmYGB8RKf'; // Используйте переменную окружения

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const payload = req.body;
            console.log('Received data:', payload);  // Для отладки

            await axios.post(discordWebhook, payload);
            res.status(200).send('Message sent to Discord');
        } catch (error) {
            console.error('Error sending message:', error.message);
            res.status(500).send('Error sending message to Discord');
        }
    } else {
        // Если метод не POST, возвращаем ошибку 405 (Method Not Allowed)
        res.status(405).send('Method Not Allowed');
    }
};
