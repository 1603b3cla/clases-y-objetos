class Fibonacci {
    static generarSerie(tope) {
        let serie = [0, 1];

        for (let i = 2; i < tope; i++) {
            serie[i] = serie[i - 1] + serie[i - 2];
        }

        return serie;
    }
}

function generarFibonacci() {
    var tope = parseInt(document.getElementById('tope').value);

    if (isNaN(tope) || tope < 1) {
        alert("Por favor, ingrese un tope válido mayor o igual a 1.");
        return;
    }

    var resultadoDiv = document.getElementById('resultado');
    var serie = Fibonacci.generarSerie(tope);

    resultadoDiv.innerText = `Serie Fibonacci hasta el tope ${tope}: ${serie.join(', ')}`;
}