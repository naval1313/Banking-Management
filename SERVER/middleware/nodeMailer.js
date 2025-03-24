const nodemailer=require('nodemailer')

const nodeMailer=(mail,password)=>{

     // Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dehariyanaval2000@gmail.com", // Your email address
    pass: "jmuixcfphburkcls", // Your email password
  },
});

// Set up email data
let mailOptions = {
  from: '"naval" <dehariyanaval200@gmail.com>', // Sender address
  to: mail, // List of recipients
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // Plain text body
  html: `hello akshay sir your password is  ${password}`, // HTML body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Message sent: %s', info.messageId);
});
}

module.exports=nodeMailer