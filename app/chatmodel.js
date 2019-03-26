var mongoose = require('mongoose');
var mongoSchema = mongoose.Schema;
var chatSchema = new mongoSchema({

    senderUserId: {
        type: string

    },

    senderName: {
        type: string

    },

    receiverUserId: {
        type: string
    },

    receiverName: {
        type: string
    },


    message: {
        type: string
    }
},
    {
        timestamps = true
    });


function chatModel() {
}

var chat = mongoose.model('chatInfo', chatSchema);
try {
    chatModel.prototype.addMessage = (chatData, callback) => {

        console.log("inside chat model", chatData.senderUserId)

        const newMessage = new chat({
            senderUserId: chatData.senderUserId,
            senderName: chatData.senderName,
            receiverUserId: chatData.receiverUserId,
            receiverName: chatData.receiverName,
            message: chatData.message

        });

        console.log("new message in model", newMessage);

        newMessage.save((err, result) => {
            if (err) {
                console.log("data was not saved ", err);
                return callback(err);
            }
            else {
                console.log("data was saved successfully ");
                return callback(null, result);
            }
        });

    }
}
catch (err) {
    console.log("ERROR  : Result was not found");
}
try {
    chatModel.prototype.getUserMessage = ((req, callback) => {
        chat.find({}), (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data);
            }
        }
    })
}
catch (err) {
    console.log("EROOR: data not found !");

}

module.exports = new chatModel();


