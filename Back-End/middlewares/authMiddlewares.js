const jwt = require("jsonwebtoken");
const jwtdecode = require("jwt-decode");
const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        }
        else {
            return res.status(500).json("You're not authenticated");
        }
    },

    verifyTokenRefresh: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    req.user = jwtdecode(accessToken);
                    next();
                }else{
                    return res.status(403).json("Token Vẫn còn hạn sử dụng");
                }
            });
        }
        else {
            return res.status(500).json("You're not authenticated");
        }
    },
};

module.exports = middlewareController;