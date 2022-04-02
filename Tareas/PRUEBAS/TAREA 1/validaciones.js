function validarCantidadFamiliares(cantidadFamiliares) {
    if(cantidadFamiliares === 0) {
        return 'Debe ingresar al menos 1 familiar'
    }
    if(!Number.isInteger(cantidadFamiliares)) {
        return 'El numero no debe tener decimales'
    }
    if(cantidadFamiliares > 40){
        return 'Debe introducir menos de 40 familiares';
    }
    return ''; 
}

function validarEdadFamiliares(edades) {
    for(let i = 0; i < edades.length; i++) {
        if (edades[i] === 0) {
            return 'Debe ingresar una edad para cada familiar'
        }
        if (!Number.isInteger(edades[i])) {
            return 'La edad no debe tener decimales'
        }
    }
    return '';
}

