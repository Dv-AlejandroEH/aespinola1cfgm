function pedirValor(valor) {
    for (acumulador=0; acumulador<valor.length; acumulador++) {
        valor [acumulador]=parseInt(prompt('Introduzca un valor'))
    }
    return valor
}
function sumaValor (valor) {
    let valorTotal=0
    for (acumulador=0; acumulador<valor.length; acumulador++) {
        valorTotal= valor[acumulador]+valorTotal
    }
    return valorTotal
}
function valorAcumuladoMayor(valor) {
    let valorTotalMayor=0
    for (acumulador=0; acumulador<valor.length; acumulador++) {
        if (valor[acumulador]>36) {
        valorTotalMayor= valor[acumulador]+valorTotalMayor
        }
    }
    return valorTotalMayor
}
function valoresMayores (valor) {
    let contarMayor=0
    for (acumulador=0; acumulador<valor.length; acumulador++) {
        if (valor[acumulador]>50) {
            contarMayor++
        }
    }
    return contarMayor
}
function mostrarResultado(valor) {
    valor=pedirValor(valor)
    suma=sumaValor(valor)
    acumulado=valorAcumuladoMayor(valor)
    mayores=valoresMayores(valor)
    return 'El valor acumulado de todos los elementos es: '+suma+'<br>El valor acumulado de los elementos mayores que 36 es:'+acumulado+'<br>La cantidad de valores mayores a 50 es: '+mayores
}
let valor=new Array(8)
resultado=mostrarResultado(valor)
document.write(resultado)