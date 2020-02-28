const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//Handlebars 
const extNameHBs = 'hbs';
let hbs = exphbs.create({extname: extNameHBs});
app.engine(extNameHBs, hbs.engine);
app.set('view engine', extNameHBs);

//Homepage route and render
app.get('/', (req, res) =>{
    res.render('index');
})
app.get('/editar', (req, res) =>{
    res.render('editar');
});

// Importa la configuración de la app
let appConfig = require('./configs/app');

// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(appConfig.express_port,() => {
    let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
    console.log(show);
  });