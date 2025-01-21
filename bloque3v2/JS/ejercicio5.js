resultado = document.getElementById('resultado');
function mostrarPrecio(pizza) {
    switch (pizza) {
        case 'jamon':
            resultado.value = '10€'
            break;
        case 'muzzarella':
            resultado.value = '20€'
            break;
        case 'morrones':
            resultado.value = '30€'
            break;
    }
}