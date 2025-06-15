// server.js
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Раздаём статические файлы из dist
app.use(express.static(path.join(__dirname, 'dist')))

// Для SPA: все маршруты → index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`🚀 Админка запущена: https://<your-url>.onrender.com`)
})
