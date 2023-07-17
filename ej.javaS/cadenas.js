console.log('hola mundo desde node');

let ciudad = 'pitalItO';
// todo a mayuscula
let ciudadUpper = ciudad.toUpperCase();
console.log('todo en Mayuscula  '+ciudadUpper);
// todo a minuscula
let ciudadlow = ciudad.toLowerCase();
console.log('todo en Minuscula  '+ciudadlow);
// primara letra mayuscula
let ciudadOracion= ciudad[0].toUpperCase() + ciudad.slice(1).toLowerCase();
console.log('primara letra mayuscula   '+ciudadOracion);
// Extraer partes de una cadena
let anyo = '2023-06-22';
let anyoString = anyo.toString();
let anyoCard = anyoString.slice(2, 4);
console.log('partes de una varible   '+anyoCard);
let nombres = 'Katerin Steisy Venavides Renjifo';
let cantNombres = nombres.length;
console.log('contar caracteres de un texto');
console.log('nombre: Katerin Steisy Venavides Renjifo   =   '+cantNombres);