// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function compararNombres() {
    const MI_NOMBRE = "francisco";
    const NOMBRE_GATO = "nemo";

    let nombreUsuario = (prompt("Como te llamas?") || "").toLowerCase();

    if (MI_NOMBRE === nombreUsuario) {
        alert(`Bienvenido Tocayo! Yo también me llamo ${MI_NOMBRE}`);
    } else if (NOMBRE_GATO === nombreUsuario) {
        alert(`Te llamas igual que mi gato ${NOMBRE_GATO}`);
    } else if (nombreUsuario.trim().length === 0) {
        alert("No ingresaste ningun nombre");
    } else {
        alert(`Bienvenido, ${nombreUsuario}`);
    }
}

function compararEdades() {
    const MI_EDAD = 23;
    let edadUsuario = Number(prompt("Cuantos años tenes?"));

    if (edadUsuario === 0) {
        edadUsuario = NaN;
    }

    if (edadUsuario > MI_EDAD) {
        alert("Sos mas grande que yo");
    } else if (edadUsuario < MI_EDAD) {
        alert("Sos mas chico que yo");
    } else if (edadUsuario === MI_EDAD) {
        alert(`Tenemos la misma edad, ${MI_EDAD}!`);
    } else {
        alert("No te entendí la respuesta.");
    }
}

function pedirDatosEnLaEntrada() {
    const RESPUESTA_SI = "si";
    const RESPUESTA_NO = "no";

    let usuarioTieneDNI = (prompt("Tenes dni (si - no)?") || "").toLowerCase();

    if (usuarioTieneDNI === RESPUESTA_SI) {
        validarEdadUsuario();
    } else if (usuarioTieneDNI === RESPUESTA_NO) {
        alert("Anda a buscar el DNI");
    } else {
        alert("No entendí tu respuesta.");
        pedirDatosEnLaEntrada();
    }
}

function validarEdadUsuario() {
    const EDAD_MINIMA_ENTRADA = 18;
    let edadUsuario = Number(prompt("Que edad tenes?")) || NaN;

    if (edadUsuario >= EDAD_MINIMA_ENTRADA) {
        alert("Bienvenido al bar!");
    } else if (edadUsuario < EDAD_MINIMA_ENTRADA) {
        alert("No podes entrar al bar!");
    } else {
        alert("No entendi la respuesta.");
        validarEdadUsuario();
    }
}

compararNombres();
compararEdades();
pedirDatosEnLaEntrada();
