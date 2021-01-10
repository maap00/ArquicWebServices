require('dotenv').config() //---- modulo para leer los archivos ".env"---

const {
    Router
} = require('express');
const nodemailer = require('nodemailer');
const router = Router();
const emailEnv = process.env.EMAIL;
const password = process.env.CLAVE;

console.log({
    emailEnv,
    password
})


//----Conf: Ruta Send-Email, interpreta los datos enviados desde el cuerpo de la peticion -----//
router.post('/send-email', async (req, res) => {
    const {
        name,
        email,
        phone,
        message
    } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'mail.greenarmor.com.ar',
        port: 25,
        secure: false, //--- Define si se envia con SCL o sin SCL
        auth: {
            user: emailEnv, //--- Ocultas en una variable de entorno
            pass: password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: "'ArquicWeb' <mastudillo@greenarmor.com.ar>",
        to: 'marco.astudillo91@gmail.com',
        subject: 'Consulta de Usuario',
        html: contentHTML
    });

    console.log('Message sent', info.messageId);


    res.send('received');
    
});

module.exports = router;