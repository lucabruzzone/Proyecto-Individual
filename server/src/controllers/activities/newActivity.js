const { Country, Activity } = require('../../db');

// función para obtener la lista completa de actividades
async function newActivity(req, res) {
    try {
        const { nombre, dificultad, duracion, temporada, paises } = req.body;
        if(!nombre || !dificultad || !duracion || !temporada || !paises) throw Error('Faltan datos');
        const newAct = await Activity.create({
            nombre,
            dificultad,
            duracion,
            temporada
        });
        if (paises && paises.length) {
            const paisesRelacionados = await Country.findAll({ where: { nombre: paises } });
            await newAct.setCountries(paisesRelacionados);
        }
        res.status(201).json(newAct);
    } catch (error) {
        res.status(500).json('Error al crear la actividad');
    }
}

module.exports = newActivity;
