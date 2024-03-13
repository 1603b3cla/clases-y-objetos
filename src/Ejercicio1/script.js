class Triangulo {
    constructor(side1, side2, side3) {
        this.lado1 = side1;
        this.lado2 = side2;
        this.lado3 = side3;
    }

    determinarTipoTriangulo() {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            this.mostrarResultado("Es un triángulo equilátero.");
        } else if (this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3) {
            this.mostrarResultado("Es un triángulo isósceles.");
        } else {
            this.mostrarResultado("Es un triángulo escaleno.");
        }
    }

    mostrarResultado(resultado) {
        document.getElementById('resultado').innerText = resultado;
    }
}

// Uso de la clase
function determinarTipoTriangulo() {
    var lado1 = parseInt(document.getElementById('side1').value);
    var lado2 = parseInt(document.getElementById('side2').value);
    var lado3 = parseInt(document.getElementById('side3').value);

    var triangulo = new Triangulo(lado1, lado2, lado3);
    triangulo.determinarTipoTriangulo();
}