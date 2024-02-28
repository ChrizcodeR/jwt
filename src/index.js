const express = require('express');
const app = express();

require('./connection')
app.set('port', 3000)

app.use(express.urlencoded({extended: false}))

app.listen(app.get('port'),
 ()=> {
    console.log("servidor iniciado por el puerto "+ app.get('port'))
 }
)

