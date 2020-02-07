const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

var port = 8000;
app.set('port', process.env.PORT || port);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use(require('./routes/index'));
var api = require('./routes/rutas');
app.use('/stadiumfood', api);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    
    console.log("Api Rest Running http://localhost:" + port);
});
