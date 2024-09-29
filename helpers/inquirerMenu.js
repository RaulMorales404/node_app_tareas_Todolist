const inquirer = require("inquirer");
require("colors");

const optionQuestions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer? \n",
    choices: [
      {
        value: "1",
        name: `${"1".green}  Crear tarea`,
      },
      {
        value: "2",
        name: `${"2".green}  Mostrar tarea`,
      },
      {
        value: "3",
        name: `${"3".green}  Editar tarea`,
      },
      {
        value: "4",
        name: `${"4".green}  Tareas completadas`,
      },
      {
        value: "5",
        name: `${"5".green}  Tareas Pendientes`,
      },
      {
        value: "6",
        name: `${"6".green}  Completar tareas`,
      },
      {
        value: "7",
        name: `${"7".green}  ${"Borrar tarea"}`,
      },
      {
        value: "0",
        name: `${"0".green}  Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("\n============================".cyan);
  console.log("   Seleccione una Opción".cyan);
  console.log("============================\n".cyan);

  const { opcion } = await inquirer.prompt(optionQuestions); // Desestructurar la respuesta

  return opcion; // Devuelve solo la opción seleccionada
};

const pause = async (value) => {
  console.log("\n");
  await inquirer.prompt([
    {
      type: "input",
      name: ` Presiona ${"ENTER".yellow} para continuar`,
    },
  ]);
};

const menuBorrarTarea = async (tareas = []) => {
  const choices = tareas.map(({ id, desc }, index) => {
    return {
      value: id,
      name: `${(index + 1).toString().green}. ${desc}`,
    };
  });
  choices.unshift({
    value:'0',
    name: `${(0).toString().green}. Salir`,
  })

  const configMenuBorrar = [
    {
      type: "list",
      name: "id",
      message: "\nSelecciona una tarea para".yellow + " Eliminar.".red,
      choices,
    },
  ];
  const { id } = await inquirer.prompt(configMenuBorrar);
  return id;
};



const menuEditarTarea = async (tareas = []) => {
  const choices = tareas.map(({ id, desc }, index) => {
    return {
      value: id,
      name: `${(index + 1).toString().green}. ${desc}`,
    };
  });
  choices.unshift({
    value:'0',
    name: `${(0).toString().green}. Salir`,
  })

  const configMenuEditar = [
    {
      type: "list",
      name: "id",
      message: "\nSelecciona una tarea para".yellow + " Editar.".blue,
      choices,
    },
  ];
  const { id } = await inquirer.prompt(configMenuEditar);
  return id;
};


const listCheckTarea = async (tareas = []) => {
  const choices = tareas.map(({ id, desc, completadoEn }, index) => {
    return {
      value: id,
      name: `${(index + 1).toString().green}. ${desc}`,
      checked:completadoEn?true:false,
    };
  });
  

  const configListCheckBorrar = [
    {
      type: "checkbox",
      name: "ids",
      message: "\nSeleccine".yellow   ,
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(configListCheckBorrar);
  return ids;
};

module.exports = {
  inquirerMenu,
  menuBorrarTarea,
  listCheckTarea,
  menuEditarTarea,
  pause,
};
