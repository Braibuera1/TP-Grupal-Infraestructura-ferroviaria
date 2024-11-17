
//Funcion para realizar la prueba del tren 
function verDetallesPrueba(mitren){
    console.log("Detalles de mi tren");
    console.log("Pasajeros permitidos: ", mitren.pasajerosPermitidos());
    console.log("Vagones populares: ", mitren.vagonesPopulares());
    console.log("Es Carguero: ", mitren.formaciónCarguera()? "SI":"NO");
    console.log("Dispersion de pesos: ", mitren.dispersiónDePesos());
    console.log("Baños: ", mitren.cantidadBaños());

}

// Funcion para realizar la prueba de los vagones
function PruebaVagones(vagones){
    for (let i=0; i<vagones.length;i++){
        console.log("Vagon numero",i+1)
        console.log("Cantidad de pasajeros: ", vagones[i].pasajerosPermitidos());
        console.log("Peso maximo: ", vagones[i].pesoMaxVagon());
        console.log("carga maxima: ", vagones[i].getCargaMax());
        console.log("Tiene baño: ", vagones[i].getTieneBaños() ? "SI":"NO")
    }
}

/*
Creamos la clase VagonPasajeros 
*/

class VagonPasajeros {

    //Inicializamos los atributos de la clase
    largo = 4
    ancho = 10
    tieneBaños = false
    estaOrdenado = true

    //Constructor 
    constructor(largo, ancho, tieneBaños, estaOrdenado) {
        this.largo = largo;
        this.ancho = ancho;
        this.tieneBaños = tieneBaños;
        this.estaOrdenado = estaOrdenado;
    }

    //metodos
    pasajerosPermitidos() {
        const calPasajeros = this.ancho <= 3 ? 8 * this.largo : 10 * this.largo;
        return this.estaOrdenado ? calPasajeros : calPasajeros - 15;
    }
    getTieneBaños() {
        return this.tieneBaños;
    }
    getCargaMax() {
        if (this.getTieneBaños()) { return 300 } else { return 800 }
    }
    pesoMaxVagon() {
        return 2000 + (this.pasajerosPermitidos() * 80) + this.getCargaMax();
    }
    
    hacerMantenimiento(){ if(!this.estaOrdenado){
        this.estaOrdenado = !this.estaOrdenado}
    }
}

class VagonDeCarga {

    //constructor
    constructor(carMaxIdeal, madSuelta) {
        this.carMaxIdeal = carMaxIdeal;
        this.madSuelta = madSuelta
    }

    //metodos
    getTieneBaños() {
        return false;
    }
    pasajerosPermitidos() {
        return 0;
    }
    getCargaMax() {
        const max = Math.max(0, this.carMaxIdeal - (this.madSuelta * 400));
        return max;
    }
    pesoMaxVagon() {
        return 1500 + this.getCargaMax()
    }

    hacerMantenimiento(){
        this.madSuelta = Math.max(0,this.madSuelta-2);
    }
}


class VagonDormitorio {

    constructor(compartimientos, camasXCompart) {
        this.compartimientos = compartimientos;
        this.camasXCompart = camasXCompart;
    }

    getTieneBaños() {
        return true;
    }
    pasajerosPermitidos() {
        return this.compartimientos * this.camasXCompart;
    }
    getCargaMax() { return 1200 }

    pesoMaxVagon() {
        return 4000 + (80 * this.pasajerosPermitidos()) + this.getCargaMax();
    }

    hacerMantenimiento(){}
}


//Clase de tren 
class Tren {

    //constructor
    constructor() {
        this.vagones = [];
    }
    agregarVagones(...vagon) {
        this.vagones.push(...vagon)
    }

    getVagones(){
        return this.vagones;
    }

    pasajerosPermitidos() {
        return this.vagones.reduce((acum, valor) => acum + + valor.pasajerosPermitidos(), 0)
    }

    vagonesPopulares() {
        return this.vagones.filter((x) => x.pasajerosPermitidos() > 50).length;
    }

    formaciónCarguera() {
        return this.vagones.every(vagon => vagon.getCargaMax() >= 1000);
    }
    dispersiónDePesos() {
        let max = this.vagones.reduce((max, valor) => max.pesoMaxVagon() > valor.pesoMaxVagon()? max:valor);
        let min = this.vagones.reduce((min, valor) => min.pesoMaxVagon() < valor.pesoMaxVagon()? min:valor);

        return max.pesoMaxVagon() - min.pesoMaxVagon()
    }
    cantidadBaños(){
        return this.vagones.filter((x) => x.getTieneBaños() ).length;
    }

    hacerMantenimiento(){
        this.vagones.forEach(x=>x.hacerMantenimiento());
    }

}

//Prueba a realizar 

//Tren 1
let vagon1 = new VagonPasajeros(10, 4, true, true);
let vagon2 = new VagonPasajeros(7, 2, false, false);
let vagon3 = new VagonDeCarga(6800, 5);
let vagon4 = new VagonDormitorio(8, 3);
let vagon5 = new VagonDeCarga(8000, 1);
let vagon6 = new VagonDormitorio(15, 4);

let tren1 = new Tren();
tren1.agregarVagones(vagon1, vagon2, vagon3, vagon4);

//Prueba de los vagones del tren 1 
PruebaVagones(tren1.getVagones());

// Prueba de Tren 1
console.log("ANTES DEL MANTENIMIENTO");
verDetallesPrueba(tren1);
tren1.hacerMantenimiento();
console.log("DESPUES DEL MANTENIMIENTO");
verDetallesPrueba(tren1);

//Creacion del tren 2
let tren2=new Tren();
tren2.agregarVagones(vagon5, vagon6)

// Prueba de Tren 2

console.log("ANTES DEL MANTENIMIENTO");
verDetallesPrueba(tren2);
tren2.hacerMantenimiento();
console.log("DESPUES DEL MANTENIMIENTO");
verDetallesPrueba(tren2);

