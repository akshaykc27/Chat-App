var userModel = require('../app/usermodel');

exports.register = (req, callback) => {
    userModel.register(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}
exports.login = (req, callback) => {
    userModel.login(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

exports.forgotPassword = (req, callback) => {
    userModel.forgotPassword(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

exports.reserPassword = (req, callback) => {
    userModel.resetPassword(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}