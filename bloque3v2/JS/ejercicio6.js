function calcularPrecio() {
    let pizza = document.getElementById('pizza');
    let cantidad = document.getElementById('cantidad');
    let resultado = document.getElementById('resultado');
    resultado.value = cantidad.value * pizza.value + '€';
}