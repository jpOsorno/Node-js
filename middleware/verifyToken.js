/** Packages */
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
    let tk = req.headers["access-token"];
    if (tk) {
        let secretKey = config.get("secretkeys").jwt;
        let tkDecoded = jwt.verify(tk, secretKey);
        let currentDate = Math.floor(Date.now() / 1000) + 60*55;// toquen con una expiracion de 5 minutos
        if(tkDecoded.exp >= currentDate){
            next();
        }else{
            return res.status(400).json({
                mess: "This token is not valid, Su token para acceder a la informacion de los Deportistas ha expirado, inicie sesion nuevamente, puede cambiar el tiempo de exp en verifyToken.js"
            });
        }
    } else {
        return res.status(400).json({
            mess: "Not access token set. , Inicie sesion para acceder al Token y ingreselo en headers, con el nombre de 'access-token' ",
        })
    }
}