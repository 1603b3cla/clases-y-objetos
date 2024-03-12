class Estudiante {
    constructor(nombre, matricula, carrera, semestre, promedio) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.carrera = carrera;
        this.semestre = semestre;
        this.promedio = promedio;
    }

    esApto() {
        if (
            (this.carrera === "Economía" && this.semestre >= 6 && this.promedio >= 8.8) ||
            (this.carrera === "Computación" && this.semestre === 6 && this.promedio > 8.5) ||
            (this.carrera === "Administración" && this.semestre > 5 && this.promedio > 8.5) ||
            (this.carrera === "Contabilidad" && this.semestre === 5 && this.promedio > 8.5)
        ) {
            return true;
        } else {
            return false;
        }
    }
}

function generarMatricula() {
    // Genera un número aleatorio de 4 dígitos
    const numeroAleatorio = Math.floor(Math.random() * 9000) + 1000;
    const carrera = document.getElementById('carrera').value;

    // Prefijo basado en la carrera (puedes ajustarlo según tus necesidades)
    const prefijo = carrera.substring(0, 3).toUpperCase();

    return `${prefijo}-${numeroAleatorio}`;
}

function verificarAceptacion() {
    var nombre = document.getElementById('nombre').value;
    var matricula = generarMatricula();
    document.getElementById('matricula').value = matricula;

    var carrera = document.getElementById('carrera').value;
    var semestre = parseInt(document.getElementById('semestre').value);
    var promedio = parseFloat(document.getElementById('promedio').value);

    var estudiante = new Estudiante(nombre, matricula, carrera, semestre, promedio);

    var resultadoDiv = document.getElementById('resultado');

    if (estudiante.esApto()) {
        resultadoDiv.innerText = `Aceptado - Nombre: ${nombre}, Matrícula: ${matricula}, Carrera: ${carrera}`;
        resultadoDiv.style.color = "#4caf50"; // Verde
    } else {
        resultadoDiv.innerText = "NO Aceptado";
        resultadoDiv.style.color = "#e53935"; // Rojo
    }
}