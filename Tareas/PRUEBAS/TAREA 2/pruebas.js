function probarValidarSalarioAnual() {
    console.assert(
        validarSalarioAnual(0) === 'Debe introducir un salario anual',
        'Validar salario anual no verificó que el salario no sea 0'
    );
    console.assert(
        validarSalarioAnual(123123) === '',
        'Validar salario anual no funcionó con un salario válido'
    );
}

probarValidarSalarioAnual();
