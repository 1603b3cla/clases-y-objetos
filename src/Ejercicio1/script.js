function determinarTipoTriangulo() {
    var lado1 = parseInt(document.getElementById('side1').value);
    var lado2 = parseInt(document.getElementById('side2').value);
    var lado3 = parseInt(document.getElementById('side3').value);

    if (lado1 === lado2 && lado2 === lado3) {
        mostrarResultado("Es un triángulo equilátero.");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        mostrarResultado("Es un triángulo isósceles.");
    } else {
        mostrarResultado("Es un triángulo escaleno.");
    }
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerText = resultado;
}