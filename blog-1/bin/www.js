const http = require('http')

const serverHandle = require('../app')

const PORT = 8010

const server = http.createServer(serverHandle)

server.listen(PORT)

console.log(`server listen at ${PORT}`)