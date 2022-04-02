//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const arrayDeNumeros = [];

let numerosDeLista = document.querySelectorAll("#elemento-lista");

for (let i = 0; i < numerosDeLista.length; i++) {
    arrayDeNumeros.push(Number(numerosDeLista[i].textContent));
}

function calcularPromedio() {
    let sumaTotal = 0;

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        sumaTotal += arrayDeNumeros[i];
    }
    let promedio = sumaTotal / arrayDeNumeros.length;
    return promedio;
}

function obtenerNumeroMenor() {
    let numeroMenor = arrayDeNumeros[0];

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] < numeroMenor) {
            numeroMenor = arrayDeNumeros[i];
        }
    }
    return numeroMenor;
}

function obtenerNumeroMayor() {
    let numeroMayor = arrayDeNumeros[0];

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] > numeroMayor) {
            numeroMayor = arrayDeNumeros[i];
        }
    }
    return numeroMayor;
}

function obtenerRepetidos() {
    let numerosRepetidos = [];
    let arrayOrdenado = [...arrayDeNumeros].sort();

    for (let i = 0; i < arrayOrdenado.length; i++) {
        if (arrayOrdenado[i + 1] === arrayOrdenado[i]) {
            numerosRepetidos.push(arrayOrdenado[i]);
        }
    }
    return numerosRepetidos;
}

let promedio = calcularPromedio();
let numeroMenor = obtenerNumeroMenor();
let numeroMayor = obtenerNumeroMayor();
let numeroFrecuente = obtenerRepetidos();

const $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function () {
    document.querySelector(
        "#texto-promedio"
    ).textContent = `El promedio es: ${promedio}`;
    document.querySelector(
        "#texto-menor"
    ).textContent = `El numero menor es: ${numeroMenor}`;
    document.querySelector(
        "#texto-mayor"
    ).textContent = `El número mayor es: ${numeroMayor}`;
    document.querySelector(
        "#texto-frecuente"
    ).textContent = `El número más frecuente es: ${numeroFrecuente}`;
};
