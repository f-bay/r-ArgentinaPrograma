function validarSalarioAnual(salarioAnual) {
    for(let i = 0; i < salarioAnual.length; i++) {
        if(salarioAnual[i] === 0) {
            return 'Debe introducir un salario anual'; 
        }
    }
    return ''; 
}

