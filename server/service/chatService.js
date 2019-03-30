const chatModel = require('../app/chatmodel');

exports.addMessage = (req, callback) => {

    console.log("request in service");

    chatModel.addMessage(req, (err, data) => {

        if (err) {
            console.log("ERROR: in service", err);
            callback(err)
        } else {

            console.log("data in service", data);
            callback(null, data)
        }

    })

}
exports.getUserMsg = (req, callback) => {
    chatModel.getUserMsg(req, (err, data) => {
        if (err) {
            console.log("chat services isn't working");
            callback(err);
        } else {
            console.log("chat service works")
            callback(null, data);
        }
    })
}
