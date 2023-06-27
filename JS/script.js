window.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var mensajeInput = document.getElementById('mensaje');

    // Validar los campos del formulario
    var nombre = nombreInput.value.trim();
    var email = emailInput.value.trim();
    var mensaje = mensajeInput.value.trim();

    // Validar el nombre (debe contener al menos 2 caracteres)
    if (nombre.length < 2) {
      alert('Por favor, ingresa un nombre válido.');
      nombreInput.focus();
      return;
    }

    // Validar el email (debe tener un formato válido)
    var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      emailInput.focus();
      return;
    }

    // Validar el mensaje (debe contener al menos 10 caracteres)
    if (mensaje.length < 10) {
      alert('Por favor, ingresa un mensaje válido (mínimo 10 caracteres).');
      mensajeInput.focus();
      return;
    }

    // Si todos los campos son válidos, puedes enviar el formulario aquí
    // Por ejemplo, puedes usar AJAX para enviar los datos del formulario al servidor

    // Mostrar un mensaje de éxito (opcional)
    alert('¡Formulario enviado con éxito!');

    // Restablecer el formulario
    form.reset();
  });
});
