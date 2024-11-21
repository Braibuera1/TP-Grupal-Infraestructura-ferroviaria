
//Funcion para realizar la prueba del tren 
function verDetallesPrueba(mitren){
    console.log("\nPasajeros permitidos: ", mitren.pasajerosPermitidos());
    console.log("Vagones populares: ", mitren.vagonesPopulares());
    console.log("Es Carguero: ", mitren.formacionCarguera()? "SI":"NO");
    console.log("Dispersion de pesos: ", mitren.dispersionDePesos());
    console.log("Baños: ", mitren.cantidadBanios());

}

// Funcion para realizar la prueba de los vagones
function PruebaVagones(vagones){
    for (let i=0; i<vagones.length;i++){
        console.log("\nVagon numero",i+1)
        console.log("Cantidad de pasajeros: ", vagones[i].pasajerosPermitidos());
        console.log("Peso maximo: ", vagones[i].pesoMaxVagon());
        console.log("carga maxima: ", vagones[i].getCargaMax());
        console.log("Tiene baño: ", vagones[i].getTieneBanios() ? "SI":"NO")
    }
}

/*
Creamos la clase VagonPasajeros 
*/

class VagonPasajeros {

    //Inicializamos los atributos de la clase
    largo = 4
    ancho = 10
    tieneBanios = false
    estaOrdenado = true

    //Constructor 
    constructor(largo, ancho, tieneBanios, estaOrdenado) {
        this.largo = largo;
        this.ancho = ancho;
        this.tieneBanios = tieneBanios;
        this.estaOrdenado = estaOrdenado;
    }

    //metodos
    pasajerosPermitidos() {
        const calPasajeros = this.ancho <= 3 ? 8 * this.largo : 10 * this.largo;
        return this.estaOrdenado ? calPasajeros : calPasajeros - 15;
    }
    getTieneBanios() {
        return this.tieneBanios;
    }
    getCargaMax() {
        if (this.getTieneBanios()) { return 300 } else { return 800 }
    }
    pesoMaxVagon() {
        return 2000 + (this.pasajerosPermitidos() * 80) + this.getCargaMax();
    }
    
    hacerMantenimiento(){ if(!this.estaOrdenado){
        this.estaOrdenado = !this.estaOrdenado}
    }
}

/*
Creamos la clase VagonDeCarga 
*/

class VagonDeCarga {

    //constructor
    constructor(carMaxIdeal, madSuelta) {
        this.carMaxIdeal = carMaxIdeal;
        this.madSuelta = madSuelta
    }

    //metodos
    getTieneBanios() {
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

/*
Creamos la clase VagonDormitorio 
*/

class VagonDormitorio {

    constructor(compartimientos, camasXCompart) {
        this.compartimientos = compartimientos;
        this.camasXCompart = camasXCompart;
    }

    getTieneBanios() {
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

/*
Creamos la clase Tren 
*/

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

    formacionCarguera() {
        return this.vagones.every(vagon => vagon.getCargaMax() >= 1000);
    }
    dispersionDePesos() {
        let max = this.vagones.reduce((max, valor) => max.pesoMaxVagon() > valor.pesoMaxVagon()? max:valor);
        let min = this.vagones.reduce((min, valor) => min.pesoMaxVagon() < valor.pesoMaxVagon()? min:valor);

        return max.pesoMaxVagon() - min.pesoMaxVagon()
    }
    cantidadBanios(){
        return this.vagones.filter((x) => x.getTieneBaños() ).length;
    }

    hacerMantenimiento(){
        this.vagones.forEach(x=>x.hacerMantenimiento());
    }

}

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
PruebaVagones(tren1.getVagones()); 

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

