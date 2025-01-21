function concatenar() {
    let name = document.getElementById('nombre').value;
    let subname = document.getElementById('apellido').value;
    let suma = name+' '+subname;
    document.getElementById('resultado').value = suma;
}