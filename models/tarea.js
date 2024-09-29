const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  desc = "";
  completadoEn = null;

  constructor(desc) {
    const id =  uuidv4();
    this.id = id;
    this.desc = desc;
    this.completadoEn = null;
    
  }
}

module.exports = Tarea;
