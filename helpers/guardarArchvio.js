const fs = require('fs');
const path = './db/data.json';


const guardarDB = async (tareas) => {
    fs.writeFileSync(path,JSON.stringify(tareas));
    return 'Guardado correctamente';
}

 const getDB = async  () => {  
    if(!fs.existsSync(path))return null;
    const dataTareas = fs.readFileSync(path,{encoding:'utf-8'});
    const response = JSON.parse(dataTareas)
    return response;
}


module.exports = {guardarDB,getDB};