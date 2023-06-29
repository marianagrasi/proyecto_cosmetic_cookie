
const {Router} = require('express')

const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{clienteGet, clientePost, clientePut, clienteDelete}=require('../controllers/cliente')
const  {isAuthenticated}  = require('../controllers/auth')

route.get('/',isAuthenticated, clienteGet)
route.post('/',isAuthenticated,clientePost )
route.put('/',isAuthenticated,clientePut )
route.delete('/',isAuthenticated,clienteDelete )



module.exports = route


