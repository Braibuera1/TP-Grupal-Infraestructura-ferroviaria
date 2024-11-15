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

}



let vagon1 = new VagonPasajeros(10, 4, true, true);
let vagon2 = new VagonPasajeros(7, 2, false, false);
let vagon3 = new VagonDeCarga(6800, 5);
let vagon4 = new VagonDormitorio(8, 3);


let tren1 = new Tren();
tren1.agregarVagones(vagon1, vagon2, vagon3, vagon4);
console.log(tren1.cantidadBaños());



//pruebas 
/*
function probarCantPax() {
    console.log('Cantidad pasajeros');
    for (let i in tren1.vagones) {
        console.log(tren1.vagones[i].pasajerosPermitidos());
    }
}

function probarPesoMaxPax() {
    console.log('Pasajeros Peso Max')
    for (let i in tren1.vagones) {
        console.log(tren1.vagones[i].pesoMaxVagon());
    }
}


function probarCargaMax() {
    console.log('Carga Maxima')

    for (let i in tren1.vagones)
        console.log(tren1.vagones[i].getCargaMax());
}


function verBaños() {
    console.log('Tiene Baños')
    for (let i in tren1.vagones)
        console.log(tren1.vagones[i].getTieneBaños())
}


probarCantPax()
probarPesoMaxPax()
probarCargaMax()
verBaños()

*/