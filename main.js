import {Tren,VagonDormitorio,VagonPasajeros,VagonDeCarga} from './src/Models/index.js';
import { verDetallesPrueba, pruebaVagones } from './src/Service/pruebas.js';

//------------Prueba a realizar --------------------------------

//Creacion de instancias de vagones
let vagon1 = new VagonPasajeros(10, 4, true, true);
let vagon2 = new VagonPasajeros(7, 2, false, false);
let vagon3 = new VagonDeCarga(6800, 5);
let vagon4 = new VagonDormitorio(8, 3);
let vagon5 = new VagonDeCarga(8000, 1);
let vagon6 = new VagonDormitorio(15, 4);


//Creacion de la instancia del primer tren
let tren1 = new Tren();
tren1.agregarVagones(vagon1, vagon2, vagon3, vagon4); //agrego los vagones al tren 1

//Creacion de la instancia del segundo tren
let tren2=new Tren();
tren2.agregarVagones(vagon5, vagon6) //agrego los vagones al tren 2

//Prueba de los vagones del tren 1 
console.log("01 - Prueba de vagones del primer tren");
pruebaVagones(tren1.getVagones()); 

// Prueba de Tren 1 - Antes y Despues
console.log("\n02 - Prueba del primer tren - Antes y Despues");
console.log("\nAntes del mantenimiento");
verDetallesPrueba(tren1);
tren1.hacerMantenimiento(); // le realizo mantenimiento al tren
console.log("\nDespues del mantenimiento");
verDetallesPrueba(tren1);

// Prueba de Tren 2
console.log("\n03 - Prueba del segundo tren - Antes y Despues");
console.log("\nAntes del mantenimiento");
verDetallesPrueba(tren2);
tren2.hacerMantenimiento(); // le realizo mantenimiento al tren
console.log("\nDespues del mantenimiento");
verDetallesPrueba(tren2);