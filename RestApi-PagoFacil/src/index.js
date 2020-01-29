const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const routes = require('./routes/Empleados')

const morgan = require('morgan');

//settings
var port = 8080;
app.set('port', process.env.PORT || port);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/Empleados',require('./routes/Empleados'));
app.use('/Token',require('./routes/Token'));
app.use('/Login',require('./routes/Login'));
//app.use('/Empleados',require('./routes/AEEmpleados'));
//app.use(require('./routes/Empleados'));
//routes(app);
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//Starting the Server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    
    console.log("Api Rest Running http://localhost:" + port);
});