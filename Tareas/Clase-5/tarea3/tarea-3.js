//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

// CLASE 1 -> 2:34:42
// CLASE 2 -> 1:48:24
// CLASE 3 -> 47:26
// CLASE 4 -> 2:18:45
// CLASE 5 -> 2:40:48

function calcularHorasTotales() {
    let horasDeVideos = document.querySelectorAll("#horas");
    let horasTotales = 0;

    for (let i = 0; i < horasDeVideos.length; i++) {
        horasTotales += Number(horasDeVideos[i].value);
    }

    return horasTotales;
}

function calcularMinutosTotales() {
    let minutosDeVideos = document.querySelectorAll("#minutos");
    let minutosTotales = 0;

    for (let i = 0; i < minutosDeVideos.length; i++) {
        minutosTotales += Number(minutosDeVideos[i].value);
    }

    return minutosTotales;
}

function calcularSegundosTotales() {
    let segundosDeVideos = document.querySelectorAll("#segundos");
    let segundosTotales = 0;

    for (let i = 0; i < segundosDeVideos.length; i++) {
        segundosTotales += Number(segundosDeVideos[i].value);
    }

    return segundosTotales;
}

const $botonCalcular = document.querySelector("#calcular-tiempo-total");

$botonCalcular.onclick = function () {
    let horasTotales = calcularHorasTotales();
    let minutosTotales = calcularMinutosTotales();
    let segundosTotales = calcularSegundosTotales();

    function calcularTiempoTotal() {
        if (segundosTotales >= 60) {
            minutosTotales = minutosTotales + segundosTotales / 60;
            segundosTotales = segundosTotales % 60;
        }

        if (minutosTotales >= 60) {
            horasTotales = horasTotales + minutosTotales / 60;
            minutosTotales = minutosTotales % 60;
        }

        return `${Math.floor(horasTotales)}:${Math.floor(
            minutosTotales
        )}:${Math.floor(segundosTotales)}`;
    }

    document.querySelector("#duracion-total").textContent =
        "El tiempo total es " + calcularTiempoTotal();
};
