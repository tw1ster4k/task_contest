const route = require('express').Router()
const {login,checkAdmin} = require('../controller/AuthController')

route.post('/login',login)
route.get('/checkAdmin', checkAdmin)

module.exports = route;