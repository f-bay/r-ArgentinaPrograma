// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

function calculateAge(actualYear, birthYear) {
    return actualYear - birthYear;
}

let actualYear = Number(prompt("What year it is?: "));
let birthYear = Number(prompt("What is your birth year?: "));

console.log(`You have ${calculateAge(actualYear, birthYear)} years`);

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

const daysInYear = 365;
const monthsInYear = 12;
const weeksInYear = 52;
const hoursInYear = 8760;

function calculateYearSalary(monthlySalary) {
    return monthlySalary * monthsInYear;
}

function calculateMonthlySalary(anualSalary) {
    return anualSalary / monthsInYear;
}

function calculateWeeklySalary(anualSalary) {
    return anualSalary / weeksInYear;
}

function calculateDailySalary(anualSalary) {
    return anualSalary / daysInYear;
}

function calculateHourSalary(anualSalary) {
    return anualSalary / hoursInYear;
}

const monthlySalary = Number(prompt("What is your monthly salary?:"));
const anualSalary = calculateYearSalary(monthlySalary);
console.log(`Earning $${monthlySalary} per month, you should earn:
                - $${anualSalary} per year.
                - $${calculateWeeklySalary(anualSalary).toFixed(2)} per week.
                - $${calculateDailySalary(anualSalary).toFixed(2)} per day.
                - $${calculateHourSalary(anualSalary).toFixed(2)} per hour.`);
