// Instalar express
// npm install express

// https://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000
var cors=require('cors')


app.use(cors())

app.get('/', (req, res) =>{

    // Twilio code
    // Instalar twilio
    // npm install twilio
    const accountSid = 'AC2a32c472777f270d46284f71c6e5a83b';
    const authToken = 'd5e5751083dc32ddcc267dcdb575e3c5';
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        from:"+19363427192",
        body: 'Alerta seguridad publica ',
        to: '+524772355144'
    })
    .then(message =>{
        console.log(message.sid)
        res.send("Se envio el mensaje")
    }).catch(err=> console.log(err))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// DOs proyectos
// CLiente => Ionic
// Servidor => Express => localhost:3000

// Si la IP no funciona, puedes usar ngrok



// Crear un servicio
// Inyectar el modulo http
// Con el modulo http hacer la peticion localhost:3000