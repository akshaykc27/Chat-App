const nodemailer = require('nodemailer');
exports.sendEmailFunction = (url,email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'akshaykc0603@gmail.com',
            pass: '12345678kc'
        },
    });
    const mailOptions = {
        from: 'akshaykc0603@gmail.com',
        to: email,
        subject: 'Chat-app password reset link ',
        text: 'Please go through the e-mail verification link provided in this mail:\n\n' + url
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("is it is invalid");
            console.log("error on sending mail--", err)
        }
        else
            console.log('result of sending mail-- ', info);
    });
}
