var mongoose = require('mongoose');

var mongoSchema = mongoose.Schema;

var chatSchema = new mongoSchema({


    senderUserId: {
        type: String

    },
    senderName: {
        type: String

    },

    receiverUserId: {

        type: String

    },
    receiverName: {
        type: String

    },
    message: {

        type: String

    }

}, {
        timestamps: true
    });

function chatModel() {

}
var chat = mongoose.model('chatInfo', chatSchema);
try {
    chatModel.prototype.addMessage = (chatData, callback) => {
        console.log('In chatmodel', chatData.senderUserId)

        const newMessage = new chat({
            senderUserId: chatData.senderUserId,
            senderName: chatData.senderName,
            receiverUserId: chatData.receiverUserId,
            receiverName: chatData.receiverName,
            message: chatData.message
        });
        console.log("new Msg in model==>", newMessage);

        newMessage.save((err, result) => {


            if (err) {
                console.log("ERROR: Data was not saved ", err);
                return callback(err);
            } else {
                console.log("Data was saved successfully");
                return callback(null, result);
            }
        });
    }

}
catch (err) {
    console.log("result not found")
}
try {
    chatModel.prototype.getUserMsg = (req, callback) => {
        chat.find({}, (err, data) => {
            if (err) {
                return callback(err)
            } else {
                return callback(null, data);
            }

        })
    }

}
catch (err) {
    console.log("ERROR: DATA not found!")
}

module.exports = new chatModel();
