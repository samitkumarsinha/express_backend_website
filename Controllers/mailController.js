module.exports = {
    sendMail(req, res){
        var nodemailer = require('nodemailer');
        var sender = req.body;
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'samitkumarsinhaworks@gmail.com',
            pass: 'vtwggnphijxhvhqc'
        }
        });

        var mailOptions = {
            from: sender.sendername + ' <' + sender.emailid + '>',
            to: 'samitkumarsinhaworks@gmail.com',
            subject: 'Mail from website by ' + sender.sendername,
            text: sender.mailbody
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                console.log(mailOptions)
                res.status(200).json({"status":"sent"});
            }
        });
    }
}