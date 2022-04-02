/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */

const ciudad = document.formulario.ciudad.value;
const descripcionRegalo = document.formulario["descripcion-regalo"].value;

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Este campo debe seleccionar una ciudad";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return "Este campo debe tener menos de 100 caracteres";
    }

    if (descripcionRegalo.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }
    return "";
}
