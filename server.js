const express = require('express')
const app = express()
const port = 3000
const contactoRouter = require('./contactos')

app.use(express.json())

app.use("/contactos", contactoRouter);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/',(req,res)=>{
 res.send("<h1>ruta raiz del servidor</h1>")
})

app.listen(port,()=>{
 console.log(`Servidor corriendo en el puerto ${port}`)
})