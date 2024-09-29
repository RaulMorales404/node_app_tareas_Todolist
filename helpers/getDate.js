const fechaActual = new Date();

const getDateCreate=()=>{
    const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtiene el día
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Obtiene el mes (añadimos 1 porque los meses empiezan desde 0)
const año = fechaActual.getFullYear(); // Obtiene el año

return  `${dia}-${mes}-${año}`;

}

module.exports ={
    getDateCreate
}