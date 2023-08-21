/** Dto */
const userDto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helper")

exports.login = (req, res, next) => {
    userDto.login({ username: req.body.username }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        if (data.length > 0) {
            let pass = helper.DecryptPassword(data[0].password);
            console.log("Password Decrypt: " + pass);
            if (req.body.password === pass) {
                let tk = helper.GenerateToken(data[0]);
                return res.status(200).json(
                    {
                        token: tk
                    }
                );
            } else {
                return res.status(400).json(
                    {
                        info: "Username or password are incorrect."
                    }
                );
            }
        }
    });
};

exports.getAll = (req, res, next) => {

    userDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.createUser = (req, res, next) => {
    let user = {
        name: req.body.name,
        lastname: req.body.lastname,
        username:req.body.username,
        password: helper.EncryptPassword(req.body.password),
    };
 
    userDto.create(user, (err, data) => {
        if (err) {
            // userDto.delete({ _id: data._id }, (e, data) => {
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            // });
        }
        // notHelper.sendSMS(std.phone);
        res.status(201).json(
            {
                info: data
            }
        );
    });
};



exports.updateUser = (req, res, next) => {
    let user = {
        name: req.body.name,
        lastname: req.body.lastname,
        username:req.body.username,
    };
    studentDto.update({ _id: req.body.id }, user, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.deleteUser= () => {
    userDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}













        // let r = config.get("roles").student;
        // let user = {
        //     name: std.name,
        //     lastname: std.lastname,
        //     username: std.code,
        //     password: helper.EncryptPassword(req.body.password),
        //     role: r
        // };
        // userDto.create(user, (err, u) => {
        //     if (err) {
        //         studentDto.delete({ _id: data._id }, (e, data) => {
        //             return res.status(400).json(
        //                 {
        //                     error: err
        //                 }
        //             );
        //         });
        //     }
        //     res.status(201).json(
        //         {
        //             info: data
        //         }
        //     );
        // });

