/** Dto */
const athleteDto = require("../../model/dto/athlete.dto");

exports.createAthlete = (req, res, next) => {
    let at = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        genero: req.body.genero,
        edad: req.body.edad,
        peso: req.body.peso,
        estatura: req.body.estatura,
        nacionalidad: req.body.nacionalidad,
        deporte: req.body.deporte,
        club: req.body.club,
        salario: req.body.salario
    };
    athleteDto.create(at, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(201).json({
            info: data
        })
    })
}

exports.updateAthlete = (req, res, next) => {
    let at = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        genero: req.body.genero,
        edad: req.body.edad,
        peso: req.body.peso,
        estatura: req.body.estatura,
        nacionalidad: req.body.nacionalidad,
        deporte: req.body.deporte,
        club: req.body.club,
        salario: req.body.salario
    };
    athleteDto.update({_id: req.body.id}, at, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(201).json(
            {
                info: data
            }
        )
    })
}

exports.getAll = (req, res, next) => {
    athleteDto.getAll({}, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json(
            {
                info: data
            }
        )
    })
}

exports.deleteAthlete = () => {
    athleteDto.delete({_id: req.body.id}, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(204).json();
    })
}