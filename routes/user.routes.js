
const controller = require("../controller/logic/user.controller");

module.exports = (app) => {
    app.get("/user", (req, res, next) => {
        controller.getAll(req, res, next);
    });
    
    app.post("/user", (req, res, next) => {
        controller.login(req, res, next);
    });
       
    app.post("/new", (req, res, next) => {
        controller.createUser(req, res, next);
    });
    
    app.put("/new", (req, res, next) => {
        controller.updateUser(req, res, next);
    });
    
    app.delete("/new", (req, res, next) => {
        controller.deleteUser(req, res, next);
    });
};