const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Извлекаем тело запроса, переданное с Roblox
      const { content } = req.body;

      // URL вебхука, куда нужно отправить запрос
      const webhookUrl = "https://discord.com/api/webhooks/1314920326760628236/FgrBtbS0nsHVAOWFSkuIgfLzU1ADpRZvYs86UdZFuaCHXvjMSNqcxyP6gGKZmYGB8RKf"; // Здесь укажите целевой вебхук URL

      // Отправляем POST-запрос с логом на вебхук
      await axios.post(webhookUrl, {
        content: content,
      });

      // Отправляем ответ обратно Roblox
      res.status(200).json({ message: 'Log forwarded successfully' });
    } catch (error) {
      console.error('Error forwarding log:', error);
      res.status(500).json({ message: 'Error forwarding log' });
    }
  } else {
    // Обрабатываем другие HTTP методы, если они есть
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
