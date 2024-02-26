// API: https://www.superheroapi.com/api.php/4905856019427443/213

//Validar el Buscador:

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    let searchHeroe = document.getElementById("searchHeroe").value.trim();

    // Expresión regular para validar que solo contenga números entre 1 y 900
    let validar = /^[1-9][0-9]{0,2}$|^900$/;

    // Validar búsqueda
    if (!searchHeroe.match(validar)) {
      document.querySelector(".errorTexto").innerHTML =
        "El número debe ser un número entre 1 y 900.";
      document.querySelector(".errorTexto").style.color = "red";
      document.querySelector(".resultado").innerHTML = ""; // Limpiar el mensaje de éxito
      return; // Termina la función si hay un error
    } else {
      document.querySelector(".errorTexto").innerHTML = ""; // Limpia el mensaje de error
    }

    // Se muestra un mensaje de éxito si el formulario es válido
    document.querySelector(".resultado").innerHTML = "Este es tu Super Heroe.";
    document.querySelector(".resultado").style.color = "green";
  });
