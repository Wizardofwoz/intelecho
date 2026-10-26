// IntelEcho: tiny static server for index.html (Node >= 18, no dependencies).
import http from 'node:http'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const PORT = Number(process.env.PORT) || 3000
const HOST = '0.0.0.0'
const INDEX = path.join(path.dirname(fileURLToPath(import.meta.url)), 'index.html')

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost')
  if (pathname === '/' && (req.method === 'GET' || req.method === 'HEAD')) {
    try {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' })
      return res.end(req.method === 'HEAD' ? undefined : await readFile(INDEX))
    } catch (e) {
      res.writeHead(500); return res.end('Server error')
    }
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not found')
})

server.listen(PORT, HOST, () => console.log(`IntelEcho on http://${HOST}:${PORT}`))
