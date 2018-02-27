const nodemailer = require('nodemailer');

const MailSender = {
  config: {
    defaultFrom: '"young & yoga" <y1yoga1node@gmail.com>',
    defaultTransport: nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'y1yoga1node@gmail.com',
            pass: '1111111',
        }
    })
  },
  sendMail(to, subject, html = '<b> hello </b>') {
    if (!to || !subject) {
      return;
    }
    this.config.defaultTransport.sendMail({
      from: this.config.defaultFrom,
      to,
      subject,
      html
    }, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    })
  }
}

module.exports = MailSender
