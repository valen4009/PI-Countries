// const { Country, Activity } = require('../db');

// const getCountriesById = async (id) => {
//     const country = await Country.findByPk(id, {
//         include:[
//             { 
//                 model: Activity,
//                 attributes: ["name", "difficult", "duration", "season"],
//             }
//         ]
//     });
//     return country
// };

// module.exports = getCountriesById


const { Country, Activity } = require('../db');

const getCountriesById = async (req, res) => {
    const {id} = req.params
    try {
        const country = await Country.findByPk(id, {
            include:[
                { 
                    model: Activity,
                    attributes: ["name", "difficult", "duration", "season"],
                }
            ]
        });
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = getCountriesById