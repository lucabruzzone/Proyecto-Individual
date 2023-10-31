const { Country } = require('../../db')

// función para obtener la lista completa de países
async function getAllCountries(req, res) {
    try {
        const data = await Country.findAll();
        // hacemos un map para extraer la capital de cada país y limpiar el string que contiene símbolos indeseados
        const allCountries = data.map(country => {
            let capital = country.capital;
            capital = capital.replace(/[{}, "]/g, '');
            capital = capital.replace(/\\/g, '');
            return {
                ID: country.ID,
                nombre: country.nombre,
                imagenBandera: country.imagenBandera,
                continente: country.continente,
                capital: capital,
                subRegion: country.subRegion,
                area: country.area,
                poblacion: country.poblacion,
            }
        });
        res.json(allCountries);
    } catch (error) {
        res.status(500).json('Error al cargar la lista de países');
    }
}

module.exports = getAllCountries;
