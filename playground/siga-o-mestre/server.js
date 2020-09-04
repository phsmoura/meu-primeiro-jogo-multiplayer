import express from 'express'
import http from 'http'
import createGame from './public/game.js'
import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public'))

const game = createGame()

console.log(game.state)

sockets.on('connection', (socket) => {
            const playerId = socket.id
            console.log(`player connected on server side with id: ${playerId}`)
        })

server.listen(3000, () => {
    console.log('server listening on port 3000')
})