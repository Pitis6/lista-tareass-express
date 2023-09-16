const express = require('express')
const app = express()
const port = 3000
const contactoRouter = require('./contactos')

app.use(express.json())

app.use("/contactos", contactoRouter);

app.get('/',(req,res)=>{
 
})

app.listen(port,()=>{
 console.log(`Servidor corriendo en el puerto ${port}`)
})