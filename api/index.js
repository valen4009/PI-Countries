const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const  addCountry  = require ("../api/src/controllers/addAllCountries.js")

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  await addCountry();
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

// async function main() {
//   try{
//   tablas.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
  
//   });
// });
// }catch (error){
//   console.error("error")
// }
// }