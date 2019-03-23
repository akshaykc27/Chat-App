const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const dbConfig = require('./config/configURL');
const route = require('./routes/routes');
const app = express();
var expressValidator = require ('express-validator')
app.use(expressValidator());

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());



// app.get('/', (req,res) => {
//     res.json ({"message" : "welcome"});
// });
app.use('/', route);
mongoose.Promise=global.Promise;
app.listen(3000,() => {
    console.log('server is running on port 3000');
});
 app.use(express.static('./client'));
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});