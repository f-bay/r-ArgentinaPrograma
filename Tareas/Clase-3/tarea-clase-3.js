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

function tarea() {
    tareaCompararNombres();
    tareaCompararEdades();
    tareaEntradaAlBar();
}

function tareaCompararNombres() {
    const MI_NOMBRE = "francisco";
    const NOMBRE_MI_GATO = "nemo";

    const nombreUsuario = prompt("Como te llamas?");
    const nombreUsuarioMinusculas = nombreUsuario.toLowerCase();

    if (MI_NOMBRE === nombreUsuarioMinusculas) {
        alert(`Bienvenido Tocayo! Yo también me llamo ${MI_NOMBRE}`);
    } else if (NOMBRE_MI_GATO === nombreUsuarioMinusculas) {
        alert(`Te llamas igual que mi gato ${NOMBRE_MI_GATO}`);
    } else {
        alert(`Bienvenido, ${nombreUsuario}`);
    }
}

function tareaCompararEdades() {
    const MI_EDAD = 22;
    const edadUsuario = Number(prompt("Cuantos años tenes?"));

    if (edadUsuario < MI_EDAD) {
        alert("Soy mas grande que vos");
    } else if (edadUsuario > MI_EDAD) {
        alert("Sos mas grande que yo");
    } else {
        alert("Tenemos la misma edad");
    }
}

function tareaEntradaAlBar() {
    const EDAD_MINIMA_PARA_ENTRAR = 18;

    const tieneDNI = preguntarDNIEnLaEntrada();

    if (!tieneDNI) {
        return;
    }
}

function preguntarDNIEnLaEntrada() {
    const RESPUESTA_SI = "si";
    const RESPUESTA_NO = "no";

    const usuarioTieneDNI = prompt("Tenes DNI?").toLowerCase();

    if (usuarioTieneDNI === RESPUESTA_SI) {
        alert("Bienvenido al bar!")
        return true;
    } else if (usuarioTieneDNI === RESPUESTA_NO) {
        alert("Anda a buscar el DNI");
        return false;
    } else {
        alert("No te entendí");
        return preguntarDNIEnLaEntrada();
    }
}
tarea();
