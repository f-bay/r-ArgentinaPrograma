function probarValidarCantidadFamiliares() {
    console.assert(
        validarCantidadFamiliares(0) === "Debe ingresar al menos 1 familiar",
        "Validar cantidad de familiares no validó que no se ingresó ningun familiar"
    );
    console.assert(
        validarCantidadFamiliares(5.4) === "El numero no debe tener decimales",
        "Validar cantidad de familiares no validó que el numero no contenga decimales"
    );
    console.assert(
        validarCantidadFamiliares(50) ===
            "Debe introducir menos de 40 familiares",
        "Validar cantidad de familiares no validó que la cantidad de familiares sea menor a 40"
    );
    console.assert(
        validarCantidadFamiliares(3) === "",
        "Validar cantidad de familiares no funcionó con una cantidad correcta"
    );
}

function probarValidarEdadFamiliares() {
    console.assert(
        validarEdadFamiliares(0) ===
            "Debe ingresar una edad para cada familiar",
        "Validar edad familiares no validó que la edad del familiar no sea 0"
    );
    console.assert(
        validarEdadFamiliares(3.4) === "La edad no debe tener decimales",
        "Validar edad familiares no validó que la edad contenga decimales"
    );
    console.assert(
        validarEdadFamiliares(22) === "",
        "Validar edad familiares no funcionó con una edad correcta"
    );
}

probarValidarCantidadFamiliares();
probarValidarEdadFamiliares();
