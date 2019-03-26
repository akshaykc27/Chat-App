const chatModel = require('../app/chatmodel');
exports.addMessage = (req,callback) => {
    console.log('request in service');
    chatModel.addMessage(req,(err,data) => {
        if(err)
        {
            console.log("ERROR in service",err);
             callback(err);
        }
        else
        {
            console.log("data in service",data);
             callback(null,data);
        }
    });
}

exports.getUserMessage = (req,callback) => {
    chatModel.exports.getUserMessage(req,(err,data) => 
    {
        if(err)
        {
            console.log("chat services is not working");
             callback(err);
        }
        else
        {
            console.log("chat services is working");
             callback(null,data)
        }
    });
}