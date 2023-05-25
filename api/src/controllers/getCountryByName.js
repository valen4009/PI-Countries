const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getCountryByName = async (req, res) => {
    const { name } = req.query;
    try {
        const countries = await Country.findAll({
            where: {
              name: { [Op.iLike]: `%${name}%` }
            },
            include: [ {
                model: Activity,
                attributes: ["name", "difficult", "duration", "season"],
            }]
        });

        if(countries.length > 0) {
            res.status(200).json(countries);
        } else {
            res.status(404).json({ message: 'No countries with that name were found' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to search for countries by name');
    };
    
}

module.exports = getCountryByName;