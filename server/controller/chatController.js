const chatServices = require("../service/chatService")
try {
    module.exports.message = (req, callback) => {
        console.log("request = ", req);
        chatServices.addMessage(req, (err, data) => {
            if (err) {
                console.log("ERROR: in controller");
                callback(err);
            } else {
                console.log("controller works");
                callback(null, data);
            }
        })
    }
}
catch (err) {
    console.log("ERROR: while sending the message");

}
try {
    module.exports.getUserMsg = (req, res) => {
        chatServices.getUserMsg(req, (err, data) => {
            var response = {};
            if (err) {
                response.success = false;
                response.error = err;
                res.status(500).send(response)
            } else {
                response.success = true;
                response.result = data;
                res.status(200).send(response)
            }
        })
    }
}
catch (err) {
    console.log("ERROR : in chat control");

}
