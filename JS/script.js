document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('nav ul li a');
  var contentSection = document.getElementById('content');

  // Agrega un evento de escucha para cada enlace del menú
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Obtiene el valor del atributo "href" del enlace
      var target = this.getAttribute('href');

      // Carga el contenido de la sección correspondiente
      loadSection(target);
    });
  });

  // Carga el contenido de la sección inicial al cargar la página
  loadSection('home.html');

  // Función para cargar el contenido de una sección
  function loadSection(target) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Actualiza el contenido de la sección
          contentSection.innerHTML = xhr.responseText;
        } else {
          // Maneja cualquier error de carga de la sección
          console.error('Error al cargar la sección: ' + xhr.status);
        }
      }
    };

    // Realiza la solicitud GET para obtener el contenido de la sección
    xhr.open('GET', target, true);
    xhr.send();
  }
});

// JavaScript para el menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});


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
