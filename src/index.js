const express = require('express');
const { userInfo } = require('os');
const app = express();
const path = require('path');


app.use(express.urlencoded({extended: false}));    //----Conf: Servidor interpreta datos del formulario-----//

app.use(express.json());     //----Conf: Interpreta datos de formato JSON-----//


app.use(require('./routes/index'));   //----Conf: Importa el archivo Router index.js  -----//


app.use(express.static(path.join(__dirname, 'public')));  //----Conf: Busca la direccion de Index.html y lo ejecuta-----//

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Sever on port ${app.get('port')}`);
});
