const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authController = {

    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            const newUser = await new User({
                username: req.body.username,
                password: hashed,
                email: req.body.email,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                numberphone: req.body.numberphone,
            });

            await newUser.save();
            res.status(200).json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
        }, process.env.JWT_ACCESS_KEY,
            { expiresIn: "30s" }
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
                const accesstoken = authController.generateAccessToken(user);
                res.status(200).json({accesstoken});
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    requestRefreshToken: async (req, res) => {
        res.status(200).json("Đã Refresh thành công token cho user có id là "+req.user.id);
    },

    checkToken: async (req, res) => {
        res.status(200).json(req.user);
    }
};

module.exports = authController;