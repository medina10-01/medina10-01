document.getElementById('myForm').onsubmit = function(event) {
  event.preventDefault();
  var respuesta = document.getElementById('respuesta').value;
  var fechaLimite = document.getElementById('fecha_limite').value;

  var currentDate = new Date();
  var enteredDate = new Date(fechaLimite);

  // Comprobar si la fecha actual es mayor que la fecha límite
  if (currentDate > enteredDate) {
    alert('No se puede enviar la respuesta después de la fecha límite.');
  } else {
    // Aquí puedes enviar el formulario o realizar cualquier otra acción
    // En este ejemplo, simplemente mostramos un mensaje de éxito
    alert('Respuesta enviada correctamente.');
  }
};
