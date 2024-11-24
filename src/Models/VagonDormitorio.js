import {Vagon} from './index.js'
/*
Creamos la clase VagonDormitorio 
*/

export class VagonDormitorio extends Vagon{

    constructor(compartimientos, camasXCompart) {
        super();
        this.compartimientos = compartimientos;
        this.camasXCompart = camasXCompart;
    }

    getTieneBanios() {
        return true;
    }
    pasajerosPermitidos() {
        return this.compartimientos * this.camasXCompart;
    }
    getCargaMax(){ 
        return 1200 
    }
    pesoMaxVagon() {
        return 4000 + (80 * this.pasajerosPermitidos()) + this.getCargaMax();
    }

    hacerMantenimiento(){}
}
