$(function() {
  var mediaquery = window.matchMedia("(max-width: 767.98px)");
  if (mediaquery.matches) {
    $("#wrapper").removeClass("toggled");
    $("#lista").removeClass("w-75");
  }

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // TOOLTIP
  $('[data-toggle="tooltip"]').tooltip("show");
});

function elegir(boton) {
  boton.toggleClass("bg-primary");
  boton.toggleClass("bg-light");
}

// EVENTO CLICK
/* $("#formulario .btn").click(function(e) {
  e.preventDefault();
  console.log("ddd");
  $("#formulario .btn").toggleClass("bg-primary");
  $("#formulario .btn").toggleClass("bg-light");
}); */

document.documentElement.addEventListener(
  "touchmove",
  function(event) {
    event.preventDefault();
  },
  false
);
