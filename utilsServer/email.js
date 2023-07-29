const nodemailer = require("nodemailer");

class Email {
  constructor(user) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.from = `${process.env.EMAIL_FROM}`;
    console.log(user);
  }

  newTransport() {
    return nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(subject, text) {
    // Mail Option
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text
    };

    //3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("Welcome To SocialFair!", `dear ${this.firstName}\n\tWelcome to the SocialFair Family where you can share your fair share of memories with your friends and family. \n\nRegards,\nSocialFair Team`);
  }

  async sendPasswordReset(url) {
    await this.send(
      "Reset Your Password",
      `Your Password Reset Token (valid for only 10 minutes): ${url}`
    );
  }
};

module.exports = Email;