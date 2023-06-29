

const {Router} = require('express')

const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{devolucionGet, devolucionPost, devolucionPut, devolucionDelete}=require('../controllers/devolucion')
const  {isAuthenticated}  = require('../controllers/auth')
route.get('/', isAuthenticated, devolucionGet)
route.post('/', isAuthenticated,  devolucionPost )
route.put('/',isAuthenticated, devolucionPut )
route.delete('/', isAuthenticated,  devolucionDelete )



module.exports = route


