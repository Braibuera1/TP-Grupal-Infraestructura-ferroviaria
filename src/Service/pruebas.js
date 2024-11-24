
//Funcion para realizar la prueba del tren 
export function verDetallesPrueba(mitren){
    console.log("\nPasajeros permitidos: ", mitren.pasajerosPermitidos());
    console.log("Vagones populares: ", mitren.vagonesPopulares());
    console.log("Es Carguero: ", mitren.formacionCarguera()? "SI":"NO");
    console.log("Dispersion de pesos: ", mitren.dispersionDePesos());
    console.log("Baños: ", mitren.cantidadBanios());

}

// Funcion para realizar la prueba de los vagones
export function pruebaVagones(vagones){
    for (let i=0; i<vagones.length;i++){
        console.log("\nVagon numero",i+1)
        console.log("Cantidad de pasajeros: ", vagones[i].pasajerosPermitidos());
        console.log("Peso maximo: ", vagones[i].pesoMaxVagon());
        console.log("carga maxima: ", vagones[i].getCargaMax());
        console.log("Tiene baño: ", vagones[i].getTieneBanios() ? "SI":"NO")
    }
}

