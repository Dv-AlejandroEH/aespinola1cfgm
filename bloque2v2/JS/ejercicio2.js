//Versión con Do While
/*
function calcularMultiplos() {
    let numero=8
    do {
        document.write(numero)
        numero=numero+8
        if (numero<=500) {
            document.write("-")
        } else {
            document.write("")
        }
    } while (numero<=500)
    return "<br>"+ "Los multiplos llegaron hasta ser menor o igual a 500"
}
*/
//Versión con for
function calcularMultiplos() {
    let numero=8
    for (numero>=0; numero<=500; numero=numero+8) {
        document.write(numero)
        if (numero<496) {
            document.write("-")
        } else {
            document.write("")
        }
    }
    return "<br>"+ "Los multiplos llegaron hasta ser menor o igual a 500"
}
resultado=calcularMultiplos()
document.write(resultado)