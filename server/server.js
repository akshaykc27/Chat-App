//to require all file and modules to support HTTP and socket.io
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/configURL');
const route = require('./routes/routes');
const app = express();
var expressValidator = require('express-validator')
app.use(expressValidator());
const chatController = require('./controller/chatController');
console.log("USERNAME : :",process.env.PASSWORD)
app.use(bodyParser.urlencoded({ extended: true })); //basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false)
//or complex algorithm for deep parsing that can deal with nested objects (i.e. true).

app.use(bodyParser.json()); //basically tells the system that you want json to be used
//listening to port 3000
var server=app.listen(3000, () => {
    console.log('server is running on port 3000');
});

const io = require('socket.io')(server);
//importing socket.io to establish a connection between client and server
io.on('connection', function (socket) {
    console.log("socket is connected ");

    socket.on('createMessage',function(message){
        chatController.message(message,(err,data) => {
            if(err)
            {
                console.log("ERROR: in message",err);
            }
            else {
                console.log(message+"in server");
                io.emit('newMessageSignal',message);
            }
        });

        socket.on('disconnect',function(){
            console.log("socket disconnected!! ");
        });
    });

});
app.use('/', route);
app.use(express.static('../client'));//
mongoose.Promise = global.Promise;
// to configure mongodb
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});