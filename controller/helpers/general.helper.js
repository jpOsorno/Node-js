// min 6:20 video 5

// packages
const CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken")

/**Encrypt password */

exports.EncryptPassword = (password) => {
    let secretkey = config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretkey).toString();
    return encryptedPassword;
}
// Decrypt
exports.DecryptPassword = (cryptedPassword) => {
    let secretKey = config.get("secretkeys").cryptojs;
    let bytes = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
}

exports.GenerateToken = (user) => {
    let secretKey = config.get("secretkeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60*60) ,     //config.get("sessionTime")
        data: {
            username: user.username,
            id: user._id,
        }
      }, secretKey);
      return token;
}
