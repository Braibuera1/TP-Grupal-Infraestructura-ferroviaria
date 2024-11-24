/*
Creamos la clase Tren 
*/

export class Tren {

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
        const pesosMaximos = this.vagones.map(x => x.pesoMaxVagon());
        return Math.max(...new Set(pesosMaximos))-Math.min(...new Set(pesosMaximos))
    }
    cantidadBanios(){
        return this.vagones.filter((x) => x.getTieneBanios() ).length;
    }
    hacerMantenimiento(){
        this.vagones.forEach(x=>x.hacerMantenimiento());
    }

}