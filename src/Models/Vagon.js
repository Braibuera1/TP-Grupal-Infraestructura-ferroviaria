export class Vagon {
    constructor() {
        if (this.constructor === Vagon) {
            throw new Error("No puedes instanciar la clase base directamente");
        }
    }
    //metodos
    pasajerosPermitidos() {}
    getTieneBanios() {}
    getCargaMax() {}
    pesoMaxVagon() {}
    hacerMantenimiento(){}
}