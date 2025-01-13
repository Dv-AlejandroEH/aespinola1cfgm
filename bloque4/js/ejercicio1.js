function mostrarAviso(control) {
    if (control.value.length<7 || control.value.length>20) {
        alert("Ha introducido más de 7 cáracteres en la clave o más de 20 carácteres")
    }
}