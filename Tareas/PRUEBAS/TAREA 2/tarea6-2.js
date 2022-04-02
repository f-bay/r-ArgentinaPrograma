
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.querySelector('#agregar');
const $botonQuitar = document.querySelector('#quitar');
const $botonCalcular = document.querySelector('#calcular');

$botonAgregar.onclick = function() {
    agregarSalarios();
}

$botonQuitar.onclick = function() {
    quitarSalarios();
    borrarErrores();
}

$botonCalcular.onclick = function() {
    const salarios = obtenerSalarios();

    const salarioMayor = calcularSalarioMayor(salarios);
    const salarioMenor = calcularSalarioMenor(salarios);
    const promedioAnual = calcularPromedioAnual(salarios);
    const promedioMensual = calcularPromedioMensual(salarios);

    let errorSalarios = validarSalarioAnual(salarios);
    let esExito = manejarErrores(errorSalarios) === 0; 

    if(esExito) {
        document.querySelector('#mayor-salario-anual').textContent = salarioMayor;
        document.querySelector('#menor-salario-anual').textContent = salarioMenor; 
        document.querySelector('#promedio-salario-anual').textContent = promedioAnual;
        document.querySelector('#promedio-salario-mensual').textContent = promedioMensual;
        document.querySelector('.input-salario').className = '';    
    } else {
        const error = document.createElement('li'); 
        error.textContent = errorSalarios; 

        document.querySelector('#errores').appendChild(error);
        document.querySelector('.input-salario').className = 'error';
    }

}

function borrarErrores() {
    document.querySelector('#errores li').remove();
}


function agregarSalarios() {
    const $contenedorSalarios = document.querySelector('#div-salarios');
    const $divSalario = document.createElement('div');
    $divSalario.className = "salario";

    const $label = document.createElement('label');
    $label.textContent = "Insertar salario anual: ";

    const $input = document.createElement('input');
    $input.type = "number"; 
    $input.className = "input-salario";
    $input.name = "salario"

    $divSalario.appendChild($label);
    $divSalario.appendChild($input);

    $contenedorSalarios.appendChild($divSalario);
}

function quitarSalarios() {
    document.querySelector('.salario').remove();
}

function obtenerSalarios() {
    const $salarios = document.querySelectorAll('.input-salario'); 
    const salarios = []; 

    for(let i = 0; i < $salarios.length; i++) {
        salarios.push(Number($salarios[i].value));
    }
    return salarios;
}

function calcularSalarioMayor(salarios) {
    let salarioMayor = salarios[0];
    for(let i = 0; i < salarios.length; i++) {
        if(salarios[i] > salarioMayor) {
            salarioMayor = salarios[i];
        }
    }
    return salarioMayor;
}

function calcularSalarioMenor(salarios) {
    let salarioMenor = salarios[0];
    for(let i = 0; i < salarios.length; i++) {
        if(salarios[i] < salarioMenor) {
            salarioMenor = salarios[i];
        }
    }
    return salarioMenor;
}

function calcularPromedioAnual(salarios) {
    let contador = 0; 
    for(let i = 0; i < salarios.length; i++) {
        contador += salarios[i];       
    }
    let promedioAnual = (contador / salarios.length).toFixed(2);
    return promedioAnual; 
}

function calcularPromedioMensual(salarios) {
    const mesesEnUnAnio = 12; 
    return (calcularPromedioAnual(salarios) / mesesEnUnAnio).toFixed(2); 
}

function validarFormulario(event) {
    event.preventDefault(); 

    const salarios = obtenerSalarios(); 
    const errorSalarios = validarSalarioAnual(salarios); 

    const errores = {
        salario: errorSalarios,
    };
}

function manejarErrores(errores) {
    const keys = Object.keys(errores); 

    let cantidadErrores = 0; 

    keys.forEach(function(key) {
        const error = errores[key];

        if(error) {
            cantidadErrores++;
        }
    });
    return cantidadErrores;
}

document.querySelector('form').onsubmit = validarFormulario;