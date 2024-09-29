require("colors");
const Input = require("./helpers/input");
const { guardarDB, getDB } = require("./helpers/guardarArchvio");
const {
  inquirerMenu,
  pause,
  menuBorrarTarea,
  listCheckTarea,
  menuEditarTarea,
} = require("./helpers/inquirerMenu");
const Tareas = require("./models/tareas");
console.clear();

const main = async () => {
  let condition = "";
  const tareas = new Tareas();
  const getTareasDB = await getDB();

  if (getTareasDB) {
    tareas.insertarTareas(getTareasDB);
  }

  do {
    condition = await inquirerMenu();

    switch (condition) {
      case "1":
        const value = await Input("Nombre de Tarea:");
        tareas.crearTarea(value);
        console.log("\n Tarea cread con exito".green);
        break;
      case "2":
        tareas.mostrarTareas();
        break;
      case "3":
        const id = await menuEditarTarea(tareas.listarArr);
        const message = await Input("Editar Tarea :".yellow);
        tareas.editarTarea(id,message);
      
        break;
      case "4":
        tareas.mostrarTareasCompleted(true);
        break;

      case "4":
        tareas.mostrarTareasCompleted(false);
        break;

      case "6":
        if (tareas.listarArr.length > 0) {
          const ids = await listCheckTarea(tareas.listarArr);
          tareas.checkTareas(ids);
        } else {
          console.log("\nSin Tareas\n".yellow);
        }

        break;

      case "7":
        if (tareas.listarArr.length > 0) {
          const id = await menuBorrarTarea(tareas.listarArr);
          if (id === "0") break;
          const confirm = await Input("Quieres borar esa tarea (y/n) :".yellow);

          if (confirm == "y" || confirm == "Y") {
            tareas.borrarTarea(id);
            console.log("\nSe Elimino con exito".green);
          } else {
            console.log("\nOperacion Cancelada".red);
          }
        } else {
          console.log("\nSin Tareas\n".yellow);
        }

        break;
    }
    await guardarDB(tareas.listarArr);
    await pause(condition);
  } while (condition !== "0");
};

main();
