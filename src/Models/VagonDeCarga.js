import {Vagon} from './index.js'
/*
Creamos la clase VagonDeCarga 
*/

export class VagonDeCarga extends Vagon {

    //constructor
    constructor(carMaxIdeal, madSuelta) {
        super();
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
        return Math.max(0, this.carMaxIdeal - (this.madSuelta * 400));
        
    }
    pesoMaxVagon() {
        return 1500 + this.getCargaMax()
    }

    hacerMantenimiento(){
        this.madSuelta = Math.max(0,this.madSuelta-2);
    }
}