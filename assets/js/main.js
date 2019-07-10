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
  $('[data-toggle="tooltipDis"]').tooltip();
  $('[data-toggle="tooltipProv"]').tooltip();
  $('[data-toggle="tooltipDep"]').tooltip();
});

function elegir(boton) {
  boton.toggleClass("bg-primary");
  boton.toggleClass("bg-light");
}
