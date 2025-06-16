import express from 'express'
import path from 'path'
import history from 'express-history-api-fallback'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const DIST_PATH = path.join(__dirname, 'dist')
// eslint-disable-next-line no-unused-vars
const HTML_FILE = path.join(DIST_PATH, 'index.html')

// Логирование запросов
app.use((req, res, next) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`)
  next()
})

// Защита от невалидных маршрутов
app.use((req, res, next) => {
  if (req.url.includes('/:') || req.url.includes('/*')) {
    console.warn(`Blocked invalid route: ${req.url}`)
    return res.redirect(301, '/users')
  }
  next()
})

// Раздаём статику
app.use(express.static(DIST_PATH))

// Поддержка SPA маршрутов
app.use(history('index.html', { root: DIST_PATH }))

// Запуск сервера
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Админка запущена: http://localhost:${PORT}`)
})
