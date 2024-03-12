class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.nuevoSueldo = this.calcularAumento();
    }

    calcularAumento() {
        if (this.sueldo < 1000) {
            return this.sueldo * 1.15;
        } else {
            return this.sueldo * 1.12;
        }
    }
}

const empleados = [
    new Empleado("Juan", 800),
    new Empleado("María", 1200),
    new Empleado("Carlos", 950),
    // Agrega más empleados según sea necesario
];

function actualizarTabla() {
    const tablaBody = document.querySelector("#tablaEmpleados tbody");
    tablaBody.innerHTML = '';

    let totalNomina = 0;

    empleados.forEach(empleado => {
        const fila = document.createElement("tr");
        const nombreCell = document.createElement("td");
        const sueldoCell = document.createElement("td");
        const nuevoSueldoCell = document.createElement("td");

        nombreCell.textContent = empleado.nombre;
        sueldoCell.textContent = `$${empleado.sueldo.toFixed(2)}`;
        nuevoSueldoCell.textContent = `$${empleado.nuevoSueldo.toFixed(2)}`;

        fila.appendChild(nombreCell);
        fila.appendChild(sueldoCell);
        fila.appendChild(nuevoSueldoCell);

        tablaBody.appendChild(fila);

        totalNomina += empleado.nuevoSueldo;
    });

    const totalNominaElement = document.querySelector("#totalNomina");
    totalNominaElement.textContent = `Total de la nómina: $${totalNomina.toFixed(2)}`;
}

actualizarTabla();