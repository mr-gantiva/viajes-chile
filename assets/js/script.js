/* Cambiar el color del navbar al hacer scroll */
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Ajusta este valor según sea necesario
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

/* Tooltips */
$(document).ready(function () {
  /* Tooltip botón Enviar correo*/
  $('[data-bs-toggle="tooltip"]').tooltip();

  //   /* Ocultar info cards Destacados */
  $(".card-title").on("click", function () {
    // Seleccionar el elemento padre con la clase "card" y toggle el contenido
    $(this).parents(".card").find(".card-text").toggle();
    // Añadir la clase .rotate-drop-down a la imagen con id dropdown
    $(this).find("#dropdown").toggleClass("rotate-drop-down");
  });
});

/* Validar los campos del formulario */
document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("inputNombre");
  const asunto = document.getElementById("inputAsunto");
  const submitButton = document.getElementById("submitBtn");

  function validateForm() {
    if (name.value.trim() !== "" && asunto.value.trim() !== "") {
      submitButton.classList.remove("disabled");
      submitButton.classList.add("btn-enviar");
      submitButton.disabled = false;
    } else {
      submitButton.classList.add("disabled");
      submitButton.classList.remove("btn-enviar");
      submitButton.disabled = true;
    }
  }
  name.addEventListener("input", validateForm);
  asunto.addEventListener("input", validateForm);

  $("#submitBtn").click(function () {
    alert("Muchas gracias!\nTe estaremos contactando.");
  });
  validateForm();
});
