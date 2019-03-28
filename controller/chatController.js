const chatServices = require('../service/chatService');
try {
    module.exports.message = (req, callback) => {
        console.log('request', req);
        chatServices.addMessage(req, (err, data) => {
            if (err) {
                console.log('error in controller', err);
                callback(err);
            }
            else {
                console.log("controller works");
                callback(null, data);
            }

        })
    }
}
catch (err) {
    console.log("ERROR: Cannot send the message");
}

try {
    module.exports.getUserMessage = (req, res) => {
        chatServices.getUserMessage(req, (err, data) => {
            var response = {};
            if (err) {
                console.log("ERROR : in controller ");
                data.response = false;
                data.response = err;
                res.status(404).send(response);
            }
            else {
                data.response = true;;
                data.response = data;
                res.status(200).send(response);
            }
        });

    }
}
catch (err) {
    console.log('ERROR: in service chat controller ');
}