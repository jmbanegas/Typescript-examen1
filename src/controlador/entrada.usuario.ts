import { Planeta } from "../modelo/planeta";

function entradaUsuario(planetas: Planeta[]): Planeta {
    const readlineSync = require('readline-sync');
    console.log("Lista de planetas:");
    planetas.forEach((planeta, index) => {
      console.log(`${index + 1}. ${planeta.nombre}`);
    });

    const seleccion = readlineSync.questionInt('Seleccione el número del planeta al que desea ir: ');
    if (seleccion < 1 || seleccion > planetas.length) {
      console.log('Error: Selección de planeta inválida.');
      process.exit(1); 
    }
    return planetas[seleccion - 1];
  }
  
  export { entradaUsuario };
  