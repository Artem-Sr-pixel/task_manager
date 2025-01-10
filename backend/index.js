const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Пример API
app.get('/api/tasks', (req, res) => {
  res.json([{ id: 1, title: 'Learn Vite', completed: false }]);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});