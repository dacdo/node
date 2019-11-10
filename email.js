// install nodemailer module first
// npm install nodemailer

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mr.dacdo@gmail.com',
    pass: 'xyz'
  }
});

var mailOptions = {
  from: 'mr.dacdo@gmail.com',
  to: 'mr.dacdo2@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


