function mostrarPalabra(palabraElegida) {
    let documento
    switch (palabraElegida) {
        case "casa":
            documento="house"
            break;
        case "mesa":
            documento="table"
            break;
        case "perro":
            documento="dog"
            break;
        case "gato":
            documento="cat"
            break;
        default:
            documento=0
    }
    return documento
}
palabra=prompt("Elija una palabra a traducir, las opciones disponibles son: (casa, mesa, perro, gato)");
let resultado=mostrarPalabra(palabra)
if (resultado==0) {
    document.write("La palabra "+palabra+" no se encuentra entre las opciones");
} else {
    document.write("La traducción de la palabra "+palabra+" es "+resultado);
}