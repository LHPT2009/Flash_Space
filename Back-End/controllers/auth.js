const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

dotenv.config();

const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken);

const authController = {

    registerUser: async (req, res) => {
        try {
            var Stext = "";
            var length = 5;
            var possible =
              "0123456789";
            for (var i = 0; i < length; i++)
              Stext += possible.charAt(Math.floor(Math.random() * possible.length));

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            const newUser = await new User({
                username: req.body.username,
                password: hashed,
                email: req.body.email,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                numberphone: req.body.numberphone,
                confirmnumberphone: false
            });

            client.messages.create({
               body:'Mã xác thực số điện thoại là ' + Stext,     
               to: `+84${req.body.numberphone}`,
               from: '+15342483381', 
             }) 
            .then(message => console.log(message))
            .catch(error => console.log(error))

            await newUser.save();
            res.status(200).json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    confirmNumberPhone: async (req, res) => {
      try {
        const user = await User.findOneAndUpdate( 
          {numberphone: req.body.numberphone},
          {confirmnumberphone: true}, 
          {new: true}
        );
        if (!user) {
          return res.status(404).json('Wrong updateUser!');
        }
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json('Error!!!');
      }  
    },


    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
        }, process.env.JWT_ACCESS_KEY,
            { expiresIn: "30s" }
        );
    },

    generatePasscodeToken: (code) => {
      return jwt.sign({
          code: code,
      }, process.env.JWT_ACCESS_KEY,
          { expiresIn: "60s" }
      );
    },

    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("Wrong username!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(404).json("Wrong Password!");
            }
            if (user && validPassword) {
              if(!user.confirmnumberphone){
                res.status(500).json("Tài khoản chưa được xác thực! mời bạn xác thực");
              }
              else {
                const accesstoken = authController.generateAccessToken(user);
                res.status(200).json({accesstoken});
              }
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    requestRefreshToken: async (req, res) => {
        const accesstoken = authController.generateAccessToken(req.user);
        res.status(200).json(accesstoken);
    },

    checkToken: async (req, res) => {
        res.status(200).json(req.user);
    },

    sendPassCodeByMail: async (req, res) => {
        try {
          const { email } = req.body;
          const user = await User.findOne({ email: email });
          if (user) {
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: process.env.USERNAME_MAIL, 
                pass: process.env.PASSWORD_MAIL,
              },
            });
    
            var Stext = "";
            var length = 5;
            var possible =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < length; i++)
              Stext += possible.charAt(Math.floor(Math.random() * possible.length));
    
            let info = await transporter.sendMail(
              {
                from: process.env.USERNAME_MAIL,
                to: `${email}`,
                subject: "Reset Password!",
                text: "Reset Password!",
                html: `<h1>PassCode khôi phục tài khoản là ${Stext}</h1>`,
              },
              (err) => {
                if (err) {
                  return res.json({
                    message: "Lỗi",
                    err,
                  });
                }
                const codetoken = authController.generatePasscodeToken(Stext)
                return res.status(200).json({codetoken});
              }
            );
          } else {
            res.status(500).json("error email");
          }
        } catch (error) {
          console.log(error);
          res.status(500).json(error);
        }
      },    

    sendPassCodeBySMS: async (req, res) => {
        const { numberphone } = req.body;
        var Stext = "";
        var length = 5;
        var possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++)
          Stext += possible.charAt(Math.floor(Math.random() * possible.length));

        client.messages.create({
               body:'PassCode khôi phục tài khoản là '+ Stext,     
               to: `+84${numberphone}`,
               from: '+15342483381', 
             }) 
            .then(message => console.log(message))
            .catch(error => console.log(error))

            const codetoken = authController.generatePasscodeToken(Stext)
            return res.status(200).json({codetoken});
    },

    resetPasswordByEmail: async (req, res) => {
        const email = req.body.email;
        const pass = req.body.password;
    
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(pass, salt);
    
        const user = await User.findOneAndUpdate(
          { email: email },
          { password: hashed }
        );
    
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json("Có gì đó ko ổn!!!");
        }
      },

      resetPasswordBySMS: async (req, res) => {
        const numberphone = req.body.numberphone;
        const pass = req.body.password;
    
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(pass, salt);
    
        const user = await User.findOneAndUpdate(
          { numberphone: numberphone },
          { password: hashed }
        );
    
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json("Có gì đó ko ổn!!!");
        }
      },
};

module.exports = authController;