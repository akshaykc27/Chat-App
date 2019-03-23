const nodemailer = require('nodemailer');
exports.sendEmailFunction = (url, ) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'akshaykc27@gmail.com',
            pass: '07'
        },
    });
    const mailOptions = {
        from: 'akshaykc27@gmail.com',
        to: 'akshaykc27@gmail.com',
        subject: 'Chat-app password reset link ',
        text: 'Please go through the e-mail verifaction link provided in this mail:\n\n' + url
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
