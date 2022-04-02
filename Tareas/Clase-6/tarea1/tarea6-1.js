const $form = document.querySelector("#formulario");

function validarFormulario(event) {
    event.preventDefault();

    const $form = document.querySelector("#formulario");

    const cantidadFamiliares = Number($form["cantidad-familiares"].value);
    const edadFamiliares = Number($form["edad-familiar"].value);

    const errorCantidad = validarCantidadFamiliares(cantidadFamiliares);
    const errorEdad = validarEdadFamiliares(edadFamiliares);

    const errores = {
        "cantidad-familiares": errorCantidad,
        "edad-familiar": errorEdad,
    };
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $listaErrores = document.querySelector("#errores");

    let cantidadErrores = 0;

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            cantidadErrores++;
        }
    });
    return cantidadErrores;
}

document.querySelector("#continuar").onclick = function (event) {
    event.preventDefault();

    const $form = document.querySelector("#formulario");

    const cantidadFamiliares = Number($form.cantidad.value);
    let errorFamiliares = validarCantidadFamiliares(cantidadFamiliares);
    let esExito = manejarErrores(errorFamiliares) === 0;

    if (esExito) {
        crearFamiliar(cantidadFamiliares);
        mostrarBotonCalculo();
        document.querySelector("#cantidad-familiares").className = "";
    } else {
        const error = document.createElement("li");
        error.textContent = errorFamiliares;

        document.querySelector("#errores").appendChild(error);
        document.querySelector("#cantidad-familiares").className = "error";
    }
};

document.querySelector("#calcular").onclick = function (event) {
    event.preventDefault();

    const edades = obtenerEdadesFamiliares();

    const edadMayor = calcularEdadMayor(edades);
    const edadMenor = calcularEdadMenor(edades);
    const promedioEdad = calcularPromedioEdad(edades);

    let errorEdades = validarEdadFamiliares(edades);
    let esExito = manejarErrores(errorEdades) === 0;

    if (esExito) {
        document.querySelector("#mayor-edad").textContent = edadMayor;
        document.querySelector("#menor-edad").textContent = edadMenor;
        document.querySelector("#promedio-edad").textContent = promedioEdad;

        mostrarResultados();
        document.querySelector(".familiares input").className = "";
    } else {
        const error = document.createElement("li");
        error.textContent = errorEdades;

        document.querySelector("#errores").appendChild(error);
        document.querySelector(".familiares input").className = "error";
    }
};

document.querySelector("#resetear").onclick = resetearElementos;

function crearFamiliar(cantidadFamiliares) {
    const $cantidadFamiliares = Number(
        document.querySelector("#cantidad-familiares").value
    );
    if ($cantidadFamiliares > 0) {
        mostrarBotonCalculo();
    } else {
        resetearElementos();
    }

    for (let i = 0; i < $cantidadFamiliares; i++) {
        crearElementoFamiliar(i);
    }
}

function crearElementoFamiliar(indice) {
    const $div = document.createElement("div");
    $div.className = "familiares";

    const $label = document.createElement("label");
    $label.textContent = "Ingrese la edad del familiar: " + (indice + 1);

    const $input = document.createElement("input");
    $input.type = "number";
    $input.name = "edad-familiar";

    $div.appendChild($label);
    $div.appendChild($input);

    document.querySelector("#familiares").appendChild($div);
}

function borrarFamiliares() {
    const $familiares = document.querySelectorAll(".familiares");
    for (let i = 0; i < $familiares.length; i++) {
        $familiares[i].remove();
    }
}

function borrarBotonCalculo() {
    document.querySelector("#calcular").className = "oculto";
}

function borrarResultados() {
    document.querySelector("#calcular-edades").className = "oculto";
}

function mostrarBotonCalculo() {
    document.querySelector("#calcular").className = "";
}

function mostrarResultados() {
    document.querySelector("#calcular-edades").className = "";
}

// OBTENER EDADES Y CALCULAR EDAD MENOR, MAYOR Y EL PROMEDIO -->

function obtenerEdadesFamiliares(edadFamiliares) {
    const $familiares = document.querySelectorAll(".familiares input");
    const edades = [];

    for (let i = 0; i < $familiares.length; i++) {
        edades.push(Number($familiares[i].value));
    }

    return edades;
}

function calcularEdadMayor(edades) {
    let edadMayor = edades[0];

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] > edadMayor) {
            edadMayor = edades[i];
        }
    }
    return edadMayor;
}

function calcularEdadMenor(edades) {
    let edadMenor = edades[0];

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < edadMenor) {
            edadMenor = edades[i];
        }
    }
    return edadMenor;
}

function calcularPromedioEdad(edades) {
    let sumaEdades = 0;

    for (let i = 0; i < edades.length; i++) {
        sumaEdades += edades[i];
    }
    let promedioEdad = (sumaEdades / edades.length).toFixed(2);

    return promedioEdad;
}

// RESETEAR

function resetearElementos() {
    borrarBotonCalculo();
    borrarFamiliares();
    borrarResultados();
    borrarErrores();
}

function borrarErrores() {
    document.querySelector("#errores li").remove();
}

$form.onsubmit = validarFormulario;
