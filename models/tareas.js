
require("colors");
const Tarea = require("./tarea");
const {getDateCreate} = require('./../helpers/getDate');
class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listarArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  insertarTareas(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }


  editarTarea(id = "",message="") {
    let subTarea = this._listado[id].desc;
    if (this._listado[id]) {
       this._listado[id].desc=message;
       console.log(`\n Se edito la ${subTarea.toString().yellow} a ${message.green}`)
    }
  }

  mostrarTareas() {
    this.listarArr.forEach((tarea, index) => {
      const numTarea = `${index + 1}`.green;
      const { desc, completadoEn } = tarea;
      const isComplited = completadoEn ? `Completada ${tarea.completadoEn.green}` : "Pendiente".red;
      console.log(`    `, `${numTarea} ${desc} :: ${isComplited}`);
    });
  }

  checkTareas(idsTareas = []) {
    const date = getDateCreate();
    this.listarArr.forEach((tarea) => {
      tarea.completadoEn = idsTareas.includes(tarea.id) ? date : null;
    });
  }

  mostrarTareasCompleted(showComplited) {
    let index = 1;

    this.listarArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const isComplited = completadoEn ? `Completada ${tarea.completadoEn.green}`.green : "Pendiente".red;

      if (showComplited && completadoEn) {
        const numTarea = `${index++}`.green;
        console.log(`    `, `${numTarea} ${desc} :: ${isComplited}`);
      } else if (!showComplited && !completadoEn) {
        const numTarea = `${index++}`.green;
        console.log(`    `, `${numTarea} ${desc} :: ${isComplited}`);
      }
    });
    if (index == 1) {
      console.log("\n Sin Tareas \n".yellow);
    }
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
