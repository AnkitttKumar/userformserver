const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const userEmail = "avengers.tony.bhaiya@gmail.com";
const userPass = "QWERTYUIOP@123";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: userEmail,
//     pass: userPass,
//   },
// });

// const userformMailer = (reciever) => {
//   const options = {
//     from: "the.thor.odison@gmail.com",
//     to: reciever,
//     subject: "You have submitted the form",
//     html: `
//   <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   </head>
//   <body style="display: flex; flex-direction: column">
//     <span>hye!</span>
//     <span>congratulations you have got selected in Avengers</span>
//     <span>just kidding :)</span>
//   </body>
// </html>

//   `,
//   };

//   transporter.sendMail(options, function (err, info) {
//     if (err) {
//       console.log("the error is here", err);
//       return;
//     }
//   });
// };

const userForm = (req, res) => {
  // console.log("req", req.body);

  // userformMailer(req.body.email);

  let mailTransporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "tiffany.emard@ethereal.email",
      pass: "nGgyX6bfDzYyPNCqNt", // generated ethereal password
    },
  });

  let mailDetails = {
    from: "tiffany.emard@ethereal.email",
    to: "mailtwoadi@gmail.com",
    subject: "Test mail",
    text: "Node.js testing mail for GeeksforGeeks",
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Email sent successfully");
    }
  });
  console.log("done");
};

router.post("/userForm", userForm);

module.exports = router;
