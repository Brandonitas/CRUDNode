const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
let appRoutes = require('./routes/api/student');
const knex = require('./database/connection');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

//Handlebars 
const extNameHBs = 'hbs';
let hbs = exphbs.create({extname: extNameHBs});
app.engine(extNameHBs, hbs.engine);
app.set('view engine', extNameHBs);

app.use('/', appRoutes);


// Importa la configuración de la app
let appConfig = require('./configs/app');

// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(appConfig.express_port,() => {
    let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
    console.log(show);
  });