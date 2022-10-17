const fs = require('fs');

// Funcion para escribir datos a ficihero bd
const saveDataToDatabase = (DB) => {
    fs.writeFileSync('./src/databases/db.json',JSON.stringify(DB,null,2),{ encoding: 'utf8'});
}


module.exports = { saveDataToDatabase };