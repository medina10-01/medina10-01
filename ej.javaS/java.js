
// ejercicio 1
// el siguiente codigo una ves se ejecuta una ves cargue el documento html
alert ('ete mensaje se ejecuta en automatico');
// ejercicio 2
// activando el modo strict
// sirva para que sea nesesario declarar las vaariables 
"use strict"
let nombreAprendiz = "brayan"
alert(nombreAprendiz)

// ejercicio 3
// crear 2 variables de tipo string (nombre, apellidos) y se muestra en consola  

let nombreAprendiz2 = 'Brayan Stiven';
let apellidosAprendiz = 'Medina';

console.log(nombreAprendiz2+' '+apellidosAprendiz);

// ejercicio 4
let num1Int = 5;
let num2Int = 3;
let num3Str = '4';
let num4Str = '8';

console.log();
console.log('ejercicio 4');
console.log('int + int(5 +3)');
console.log(num1Int+num2Int);
console.log('string + string(\"4\" + \"8\")');
console.log(num3Str+num4Str);
console.log('int + string(5 + \"8\")');
console.log(num1Int+num4Str);

// ejercicico 5
// de string a entero (int)
// tambien puede usar number(name string)

let num3Intnum= Number(num4Str);

let num3Int = parseInt(num3Str);
console.log('convertir de string a entero');
let resultadoInt = num1Int+ num3Int;
console.log(resultadoInt);


// de entero a string
let num1str = num1Int.toString();
let resultadoStr = num3Str+ num1str;
console.log(resultadoStr);

// de entero y string a decimal

console.log('convercion de entero a decimal');
let num1float = parseFloat(num1Int);
let num3float = parseFloat(num3Str);
let num5float = 5.6;
let num6float = 5.5;
console.log('valores: '+num1float+' + '+num3float+' + '+num5float);
console.log('resultado: '+(num1float+num3float+num5float));

// de decimal a entero

console.log('convercion de decimal a entero con ajuste hacia el techo');
let num5int = Math.ceil(num5float);
console.log(num5int);
console.log('convercion de decimal a entero con ajuste hacia el piso');
let num6int = Math.floor(num6float);
console.log(num6float);

// limitaciones para declaracion de variables
// 1. no iniciar con numero
// 2. los nombres de variables no llevan espacios
// 3. la declaracion de variables no llevan commillas ni caracteres especiales (-,*,\)
// 4. no podemos declarar bariables con nombres restringidos(que son de uso interno del lenguaje)