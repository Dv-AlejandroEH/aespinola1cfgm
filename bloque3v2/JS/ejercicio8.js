function comprobarEdad() {
    const si = document.getElementById('si');
    const no = document.getElementById('no');
    if (si.checked) {
        alert('Puede ingresar a la página');
    }
    if (no.checked) {
        alert('No puede ingresar a la página, para ingresar a la página debe de ser mayor de edad');
    }
}