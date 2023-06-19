const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const Account = require("../models/Account");

dotenv.config();

const OTPController = {
  GetOTPById: async (req, res) => {
    try {
      const { check, idacc } = req.body;
      var Stext = "";
      var length = 5;
      var possible = "0123456789";
      const account = await Account.findById(idacc);
      for (var i = 0; i < length; i++)
        Stext += possible.charAt(Math.floor(Math.random() * possible.length));

      if (account) {
        if (check == "checkmail") {
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.USERNAME_MAIL, // generated ethereal user
              pass: process.env.PASSWORD_MAIL, // generated ethereal password
            },
          });
          // send mail with defined transport object
          let info = await transporter.sendMail(
            {
              from: process.env.USERNAME_MAIL, // sender address
              to: `${account.email}`, // list of receivers
              subject: "Gửi mã xác thực OTP", // Subject line
              text: "Gửi mã xác thực OTP!", // plain text body
              html: `
                      <body style="margin: 0px; font-size: 16px; border: 1px solid rgba(115, 130, 126, 0.6);">
              <div style="margin: 40px; color: #1F1F1F;max-width: 512px;">
                    <h1 class="fw-bold m-0" style="color: rgb(255, 193, 7);">FLASH SPACE</h1>
                  <div style="width: fit-content;">
                      <h2 style="line-height: 135%;">Thân gửi Khách hàng,</h2>
                      <p style="letter-spacing: 0.04em">Đây là mã OTP xác thực đặt phòng của bạn </p>
                      <div style="display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      padding: 16px;
                      margin: 48px 0px;
                      border-radius: 16px;
                      color: #07221B;
                      background-color: #dee4e2;">
                          <h1>${Stext}</h1>
                      </div>
                      <p style="letter-spacing: 0.04em">Email này gửi cho bạn mã xác thực OTP. Bạn có 60s để xác thực.</p>
                      <p>Nếu bạn không phải người thực hiện việc này thì hãy liên hệ cho chúng tôi qua flashspacevn@gmail.com</p>
                      <div style="box-sizing: border-box;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      padding: 16px 24px;
                      margin: 56px 0px;
                      border-left: 2px solid #004274;">
                          <p style="letter-spacing: 0.04em">Chân thành cảm ơn,<br>
                            Flash Space Team</p>
                      </div>
                      <div style="height: 0px;
                      border: 1px solid #004274;
                      margin: 16px 0px;">
                      </div>
                  </div>
              </div>
          </body>`,
            },
            (err) => {
              if (err) {
                return res.json({
                  message: "Lỗi",
                  err,
                });
              }
            }
          );
        } else {
          const accountSid = process.env.ACCOUNTSID;
          const authToken = process.env.AUTHTOKEN;
          const client = new twilio(accountSid, authToken);

          client.messages
            .create({
              body: `Mã xác thực OTP bạn được gửi từ flashspacevn:
                     ${Stext}`,
              to: `+84${account.phonenumber}`,
              from: "+14066934842",
            })
            .then((message) => console.log(message.sid));
        }
        const token = jwt.sign(
          {
            otp: Stext,
          },
          process.env.JWT_ACCESS_KEY,
          { expiresIn: "60s" }
        );
        res.status(200).json(token);
      } else {
        res.status(404).json("Ko tìm thấy thông tin người dùng!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = OTPController;
