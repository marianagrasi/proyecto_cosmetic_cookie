

const {Router} = require('express')

const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{usuarioGet, usuarioPost, usuarioPut, usuarioDelete}=require('../controllers/usuario')
const  {isAuthenticated}  = require('../controllers/auth')
route.get('/',isAuthenticated, usuarioGet)
route.post('/',isAuthenticated,usuarioPost )
route.put('/',isAuthenticated,usuarioPut )
route.delete('/',isAuthenticated,usuarioDelete )



module.exports = route


