import {Vagon} from './index.js'
/*
Creamos la clase VagonPasajeros 
*/

export class VagonPasajeros extends Vagon{

    //Constructor 
    constructor(largo = 4, ancho = 10, tieneBanios = false, estaOrdenado = true) {
        super();
        this.largo = largo;
        this.ancho = ancho;
        this.tieneBanios = tieneBanios;
        this.estaOrdenado = estaOrdenado;
    }

    //metodos
    pasajerosPermitidos() {
        const calPasajeros = this.ancho <= 3 ? 8 * this.largo : 10 * this.largo;
        return this.estaOrdenado ? calPasajeros : Math.max(0, calPasajeros - 15);
    }
    getTieneBanios() {
        return this.tieneBanios;
    }
    getCargaMax() {
        return this.getTieneBanios() ? 300 : 800;
    }
    pesoMaxVagon() {
        return 2000 + (this.pasajerosPermitidos() * 80) + this.getCargaMax();
    }
    
    hacerMantenimiento(){
        return this.estaOrdenado = true;
    }
}