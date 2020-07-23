export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

// Calcula el total a pagar según la marca
export function calcularMarca(marca) {
    let incremento;
    switch (marca) {
        case 'europeo':
            // 30%
            incremento = 1.30;
            break;
        case 'americano':
            // 15%
            incremento = 1.15;
            break;
        case 'asiatico':
            // 5%
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primera letra mayúscula
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}