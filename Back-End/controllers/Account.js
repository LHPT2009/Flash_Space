const Account = require("../models/Account");
const path = require("path");
const sharp = require("sharp");
const AccountController = {
  getAllAccounts: async (req, res) => {
    try {
      const account = await Account.find().populate("idrole");
      res.status(200).json(account);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteAccount: async (req, res) => {
    try {
      const account = await Account.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAccountById: async (req, res) => {
    try {
      const account = await Account.findById(req.params.id).populate("idrole");
      res.status(200).json(account);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addAccount: async (req, res) => {
    try {
      const newAccount = await new Account({
        idpermission: req.body.idpermission,
        username: req.body.username,
        password: req.body.password,
        lastname: req.body.lastname,
        avatar: req.body.avatar,
        birthday: req.body.birthday,
        static: req.body.static,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        emailverification: req.body.emailverification,
        phonenumberverification: req.body.phonenumberverification,
        sex: req.body.sex,
      });

      await newAccount.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateAccount: async (req, res) => {
    try {
      let compressedImageFileSavePath = path.join(
        __dirname,
        "../images",
        req.file.filename
      );
      sharp(req.file.path)
        // .resize(640, 480)
        .jpeg({
          quality: 50,
          chromaSubsampling: "4:4:4",
        })
        .toFile(compressedImageFileSavePath);
      const updateAccount = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        avatar: req.file.filename,
        birthday: req.body.birthday,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        sex: req.body.sex,
      };
      const account = await Account.findByIdAndUpdate(
        req.params.id,
        updateAccount,
        {
          new: true,
        }
      );
      if (!account) {
        return res.status(404).json("Wrong updateAccount!");
      }
      res.status(200).json(account);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
  updateAccountNotImage: async (req, res) => {
    try {
      const updateAccount = req.body;
      const account = await Account.findByIdAndUpdate(
        req.params.id,
        updateAccount,
        {
          new: true,
        }
      );
      if (!account) {
        return res.status(404).json("Wrong updateAccount!");
      }
      res.status(200).json(account);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = AccountController;
