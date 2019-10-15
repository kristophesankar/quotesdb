const jsonServer = require('json-server')

const main = jsonServer.create()
const api = jsonServer.create()
const router = jsonServer.router('db.json', { foreignKeySuffix: 'Id' })
const middlewares = jsonServer.defaults({ noCors: true })

api.use(middlewares)
api.use(router)
api.listen(3002)
console.log('Server started on port 3002')
