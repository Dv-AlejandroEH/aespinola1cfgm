function abrir() {
    let ventana = open();
    ventana.document.write("Estoy escribiendo en la nueva ventana<br>");
    ventana.document.write("Segunda linea");
}

function abrirParametros() {
    let ventana = open('', '', 'status=yes,width=400,height=250,menubar=yes');
    ventana.document.write("Esto es lo primero que aparece<br>");
}

function mostrarAlerta() {
    alert("Esta ventana de alerta ya la utilizamos en otros problemas.");
}

function confirmar() {
    let respuesta = confirm("Presione alguno de los dos botones");
    if (respuesta == true)
        alert("presionó aceptar");
    else
        alert("presionó cancelar");
}

function cargarCadena() {
    let cad = prompt("cargue una cadena:");
    alert("Usted ingreso " + cad);
        }