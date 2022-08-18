// 1.- Hacer un número negativo

function makeNegative(num) { // Función para convertir un número positivo a negativo con un parámetro (cero debe regresar cero)
    if (num <= 0) { // Si el parámetro num es menor o igual que cero 
        return num; // la función regresa el parámetro num sin modificarlo
    } else { // Si el parámetro num es mayor que cero
        return num * -1; // la función regresa el parámetro num multiplicado por -1
    }
}

const functionMakeNegative = {
    makeNegative
}

module.exports = functionMakeNegative;

