// GMT.....Greenwich Mean Time
console.log('==fecha y hora GMT');
let timeGmt = new Date();
console.log(timeGmt);
console.log('fecha y hora en string');
let timeGmtStr = timeGmt.toString();
console.log(timeGmtStr);
console.log('obtener el día de la semana');
let timeGMTday= timeGmt.getDay();
console.log(timeGMTday);
let diaSemana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
console.log('hoy es: ' + diaSemana[timeGMTday]);
console.log('obtener el mes del año');
let timeMonthGmt = timeGmt.getMonth();
let mesAnio = [ 'Enero',        'Febrero',  'Marzo',     'Abril', 
                'Mayo',         'Junio',    'Julio',     'Agosto', 
                'Septiembre',   'Octubre',  'Noviembre', 'Diciembre'];
console.log('El mes es: '+mesAnio[timeMonthGmt]);
console.log('fecha y hora desfragmentada');
let currentTime = new Date();
console.log('dia de la semana: '+currentTime.getDay());
console.log('mes del año: '+currentTime.getMonth());
console.log('dia del mes: '+ currentTime.getDate());
console.log('año'+ currentTime.getFullYear());
console.log('hora: '+ currentTime.getHours());
console.log('minutos: '+currentTime.getMinutes());
console.log('segundos '+currentTime.getSeconds());
console.log('milisegundos: '+ currentTime.getMilliseconds());

console.log('==milisegundos transcurridos desde el 01/01/1970==');
console.log(currentTime.getTime());
console.log('establecinedo diferencias en fechas');
let newYear2024= new Date('January 1, 2024');
let fechaActual = new Date();
let fechaActualms =fechaActual.getTime();
let newYear2024ms= newYear2024.getTime();
let milisegundosDif = newYear2024ms -fechaActualms;

let diasDif = milisegundosDif/(1000*60*60*24);
console.log('Días faltantes para el año nuevo: '+ Math.floor(diasDif));

console.log('ingresar fecha y hora');
let fechaHora = new Date('July 2, 2023 08:00:00')
let fechaHorams= fechaHora.getTime()
let fechaDifBot = fechaHorams-fechaActualms;
console.log('segundos faltantes: '+fechaDifBot/1000);
console.log('minutos faltantes: '+ fechaDifBot /(1000*60));
console.log('horas faltantes: '+fechaDifBot/(1000*60*60));
console.log('dias faltantes: '+fechaDifBot/(1000*60*60*24));
calcularTiempoVotaciones();


function calcularTiempoVotaciones() {
    let diasfaltantes =Math.floor(fechaDifBot/(1000*60*60*24)); 
    let HorasRestantes=Math.floor (fechaDifBot/(1000*60*60)%24);
    let minRestan =Math.floor( fechaDifBot /(1000*60)%60);
    console.log('timpo restantres para las elecciones es: '+diasfaltantes+' dias '+HorasRestantes+' horas '+minRestan+' segundos');
}