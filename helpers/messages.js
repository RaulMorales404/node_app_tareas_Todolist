require('colors')

const mostrarMenu = () => {

    return new Promise((resolve)=>{
        console.clear();
 
        console.log("\n============================".cyan);
        console.log("   Seleccione una Opcion".cyan);
        console.log("============================\n".cyan);
  
        console.log(`${"1".cyan}.-Crear tarea`)
        console.log(`${"2".cyan}.-Mostrar tarea`)
        console.log(`${"3".cyan}.-Tareas completadas`)
        console.log(`${"4".cyan}.-Tareas Pendientes`)
        console.log(`${"5".cyan}.-Completar tareas`)
        console.log(`${"6".cyan}.-${"Borrar tarea"}`)
        console.log("")
        console.log("0.-Salir \n".yellow);
        console.log("")
    
        const readLine = require("readline").createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
         readLine.question("Selecciona una Opcion: ",(opt)=>{
         readLine.close();
         resolve(opt)
         })  
    })

  

}

const pause = () => {
    
     return new Promise((resolve)=>{

        const readLine = require("readline").createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readLine.question(`\nPresiona ${'ENTER'.yellow} para continuar\n`,(opt)=>{
            readLine.close();
            resolve()
        })
     })
   
   
    
 }

module.exports={
    mostrarMenu,
   pause
}

