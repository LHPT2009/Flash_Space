const Account = require("../models/Account");
const WorkAssignment = require("../models/WorkAssignment");
const ImagesCMND = require("../models/ImagesCMND");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const twilio = require("twilio");

dotenv.config();

const AuthController = {
  registerAccount: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const newAccount = new Account({
        idrole: "642dc5fe3db1f869d982a638",
        username: req.body.username,
        password: hashed,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        avatar: "iconAccount.png",
        birthday: "",
        static: 1,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        verification: false,
        sex: 0,
      });
      const newImagesCMND = new ImagesCMND({
        idaccount: newAccount.id,
        frontimage: "",
        backimage: "",
        numbercard: "",
        name: "",
        birth: "",
        sex: 0,
        address: "",
        datecard: "",
        staticimage: 0,
        static: 0,
      });
      res.status(200).json(newAccount);
      await newImagesCMND.save();
      await newAccount.save();

      if (req.body.check == "checkmail") {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.USERNAME_MAIL,
            pass: process.env.PASSWORD_MAIL,
          },
        });
        let send = jwt.sign(
          {
            id: newAccount._id,
          },
          process.env.JWT_ACCESS_KEY
        );
        let info = await transporter.sendMail({
          from: process.env.USERNAME_MAIL,
          to: req.body.email,
          subject: "Mail xác thực!",
          text: "Mail xác thực!",
          html: `
          <body
      style="
        margin: 0px;
        background-color: #f5f5f5;
        font-size: 16px;
        border: 1px solid #004274;
        max-width: 512px;
      "
    >
      <div style="margin: 40px; color: #1f1f1f">
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 24px;
          "
        >
        <h1 class="fw-bold m-0" style="color: rgb(255, 193, 7);">FLASH SPACE</h1>
        </div>
        <div style="width: fit-content">
          <h2 style="line-height: 135%">Chào mừng đến với Flash Space</h2>
          <p style="letter-spacing: 0.04em">Xác thực tài khoản tại đây</p>
          <button
            style="
              text-align: center;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              padding: 16px;
              margin: 48px 0px;
              border-radius: 16px;
              color: #004274;
              background-color: #dce2e7;
            "
          >
            <a
              style="text-decoration: none; font-weight: 600; color: inherit"
              href="http://localhost:3000/confirmmail?confirm=${send}"
              >Xác thực</a
            >
          </button>
          <p>
            Nếu bạn không phải người thực hiện việc này thì hãy liên hệ cho chúng
            tôi qua flashspacevn@gmail.com
          </p>
          <div
            style="
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              padding: 16px 24px;
              margin: 56px 0px;
              border-left: 2px solid #004274;
            "
          >
            <p style="letter-spacing: 0.04em">
              Chân thành cảm ơn,<br />
              Flash Space Team
            </p>
          </div>
          <div
            style="
              height: 0px;
              border: 1px solid #004274;
              margin: 16px 0px;
            "
          ></div>
        </div>
      </div>
    </body>
              `,
        });
      }
      if (req.body.check == "checkphonenumber") {
        const accountSid = process.env.ACCOUNTSID;
        const authToken = process.env.AUTHTOKEN;
        const client = new twilio(accountSid, authToken);

        let send = jwt.sign(
          {
            id: newAccount._id,
          },
          process.env.JWT_ACCESS_KEY
        );

        client.messages
          .create({
            body: `Hãy bấm vào link ở này để đến trang xác thực của flashspacevn:${
              process.env.PORTFE ? process.env.PORTFE : `http://localhost:3000`
            }/confirmmail?confirm=${send}`,
            to: `+84${req.body.phonenumber}`,
            from: "+14066934842",
          })
          .then((message) => console.log(message.sid));
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  registerAccountByAdmin: async (req, res) => {
    try {
      // StringRandom
      var Stext = "";
      var length = 5;
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++)
        Stext += possible.charAt(Math.floor(Math.random() * possible.length));

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(Stext, salt);

      const newAccount = new Account({
        idrole: "643d90ff553700c36cfa4730",
        username: req.body.username,
        password: hashed,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        avatar: "iconAccount.png",
        birthday: "",
        static: 0,
        email: req.body.email,
        phonenumber: "",
        verification: false,
        sex: 0,
      });
      const newWorkAssignment = new WorkAssignment({
        idroom: "6452a565c33ced564a4ab3b4",
        idaccount: newAccount._id,
        work: "",
        static: 0,
        implementationdate: "",
      });

      res.status(200).json(newAccount);
      await newAccount.save();
      await newWorkAssignment.save();
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USERNAME_MAIL,
          pass: process.env.PASSWORD_MAIL,
        },
      });
      let send = jwt.sign(
        {
          id: newAccount._id,
        },
        process.env.JWT_ACCESS_KEY
      );
      let info = await transporter.sendMail({
        from: process.env.USERNAME_MAIL,
        to: req.body.email,
        subject: "Mật khẩu đăng nhập của bạn",
        text: "Mật khẩu tài khoản",
        html: `
        <body
              style="
                margin: 0px;
                background-color: #f5f5f5;
                font-size: 16px;
                border: 1px solid #004274;
                max-width: 512px;
              "
            >
              <div style="margin: 40px; color: #1f1f1f">
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 24px;
                  "
                >
                <h1 class="fw-bold m-0" style="color: rgb(255, 193, 7);">FLASH SPACE</h1>
                </div>
                <div style="width: fit-content">
                  <h2 style="line-height: 135%">Chào mừng thành viên mới đến với Flash Space</h2>
                  <p style="letter-spacing: 0.04em">Mật khẩu đăng nhập của bạn</p>
                  <button
              style="
                text-align: center;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 16px;
                margin: 48px 0px;
                border-radius: 16px;
                color: #004274;
                background-color: #dee4e2;
              "
            >
              <p style="text-decoration: none; font-weight: 600; color: inherit">${Stext}</p>
            </button>
                  <p>
                    Nếu bạn không phải người thực hiện việc này thì hãy liên hệ cho chúng
                    tôi qua flashspacevn@gmail.com
                  </p>
                  <div
                    style="
                      box-sizing: border-box;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      padding: 16px 24px;
                      margin: 56px 0px;
                      border-left: 2px solid #004274;
                    "
                  >
                    <p style="letter-spacing: 0.04em">
                      Chân thành cảm ơn,<br />
                      Flash Space Team
                    </p>
                  </div>
                  <div
                    style="
                      height: 0px;
                      border: 1px solid #004274;
                      margin: 16px 0px;
                    "
                  ></div>
                </div>
              </div>
            </body>
            `,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  generateAccessToken: (account) => {
    return jwt.sign(
      {
        id: account.id,
        rolename: account.idrole.rolename,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "15s" }
    );
  },

  loginAccount: async (req, res) => {
    try {
      const account = await Account.findOne({
        username: req.body.username,
      }).populate("idrole", ["rolename"]);
      if (!account) {
        return res.status(404).json("Wrong username!");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        account.password
      );
      if (!validPassword) {
        return res.status(404).json("Wrong Password!");
      }
      if (account && validPassword) {
        const accessToken = AuthController.generateAccessToken(account);
        const { password, ...others } = account._doc;
        res.status(200).json({ ...others, accessToken });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  loginGoogle: async (req, res) => {
    try {
      const account = await Account.findOne({ email: req.body.email }).populate(
        "idrole"
      );
      if (account) {
        const accessToken = AuthController.generateAccessToken(account);
        res.status(200).json({ ...account._doc, accessToken });
      } else {
        const newAccount = new Account({
          idrole: "642dc5fe3db1f869d982a638",
          username: "Thong tin bao mat tu Google",
          password: "Thong tin bao mat tu Google",
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          avatar: "",
          birthday: "",
          static: 1,
          email: req.body.email,
          phonenumber: "",
          verification: true,
          sex: "",
        });
        await newAccount.save();
        const account = await Account.findOne({
          email: req.body.email,
        }).populate("idrole");
        const accessToken = AuthController.generateAccessToken(account);
        res.status(200).json({ ...account._doc, accessToken });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  confirmEmail: async (req, res) => {
    try {
      const account = await Account.findByIdAndUpdate(
        req.params.id,
        { verification: true },
        {
          new: true,
        }
      );
      if (!account) {
        return res.status(404).json("Wrong updateAccount!");
      }
      res.status(200).json(account);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  SendCodeReset: async (req, res) => {
    try {
      const { email, phonenumber, check } = req.body;
      var Stext = "";
      var length = 5;
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++)
        Stext += possible.charAt(Math.floor(Math.random() * possible.length));

      if (check == "checkmail") {
        const account = await Account.findOne({ email: email });
        if (account) {
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
              to: `${email}`, // list of receivers
              subject: "Lấy lại mật khẩu!", // Subject line
              text: "Lấy lại mật khẩu!", // plain text body
              html: `
              <body style="margin: 0px; font-size: 16px; border: 1px solid rgba(115, 130, 126, 0.6);">
      <div style="margin: 40px; color: #1F1F1F;max-width: 512px;">
            <h1 class="fw-bold m-0" style="color: rgb(255, 193, 7);">FLASH SPACE</h1>
          <div style="width: fit-content;">
              <h2 style="line-height: 135%;">Thân gửi Khách hàng,</h2>
              <p style="letter-spacing: 0.04em">Đây là mã thay đổi mật khẩu của tài khoản </p>
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
              <p style="letter-spacing: 0.04em">Email này được gửi vì tài khoản của bạn chọn quên mật khẩu. Bạn có 60s để thay đổi nhập mã.</p>
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
              const tokenreset = jwt.sign(
                {
                  email: email,
                  passcode: Stext,
                  type: "email",
                },
                process.env.JWT_ACCESS_KEY,
                { expiresIn: "60s" }
              );
              return res.status(200).json(tokenreset);
            }
          );
        } else {
          res.status(500).json("error email");
        }
      }
      if (check == "checkphonenumber") {
        const accountSid = process.env.ACCOUNTSID;
        const authToken = process.env.AUTHTOKEN;
        const client = new twilio(accountSid, authToken);

        client.messages
          .create({
            body: `Code xác thực bạn được gửi từ flashspacevn:
             ${Stext}`,
            to: `+84${phonenumber}`,
            from: "+14066934842",
          })
          .then((message) => console.log(message.sid));

        const tokenreset = jwt.sign(
          {
            phonenumber: phonenumber,
            passcode: Stext,
            type: "phonenumber",
          },
          process.env.JWT_ACCESS_KEY,
          { expiresIn: "60s" }
        );
        return res.status(200).json(tokenreset);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  ResetPassword: async (req, res) => {
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const pass = req.body.password;
    const type = req.body.type;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(pass, salt);

    if (type == "email") {
      const account = await Account.findOneAndUpdate(
        { email: email },
        { password: hashed }
      );
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).json("Có gì đó ko ổn!!!");
      }
    }
    if (type == "phonenumber") {
      const account = await Account.findOneAndUpdate(
        { phonenumber: phonenumber },
        { password: hashed }
      );
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).json("Có gì đó ko ổn!!!");
      }
    }
  },
};
module.exports = AuthController;
