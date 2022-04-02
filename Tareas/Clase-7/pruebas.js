function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Este campo debe seleccionar una ciudad",
        "Validar ciudad no validó que la ciudad no sea vacía"
    );
    console.assert(
        validarCiudad("Buenos Aires") === "",
        "Validar ciudad no funcionó con un nombre de ciudad válido"
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "Este campo debe tener menos de 100 caracteres",
        "Validar descripción del regalo no validó que la descripción tenga menos de 100 caracteres"
    );

    console.assert(
        validarDescripcionRegalo("") ===
            "Este campo debe tener al menos 1 caracter",
        "Validar descripción del regalo no validó que la descripción no sea vacía"
    );
    console.assert(
        validarDescripcionRegalo("regalo") === "",
        "Validar descripcion regalo no funciono con una descripcion correcta"
    );
}
