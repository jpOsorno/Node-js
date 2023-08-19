const controller = require("../controller/logic/athlete.controller")

module.exports = (app) => {
    app.get("/athlete", (req, res, next) => {
        controller.getAll(req, res, next);
    })
    
    app.post("/athlete", (req, res, next) => {
        controller.createAthlete(req, res, next);
    })

    app.put("/athlete", (req, res, next) => {
        controller.updateAthlete(req, res, next);
    })

    app.delete("/athlete", (req, res, next) => {
        controller.deleteAthlete(req, res, next);
    })
}