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
});

document.documentElement.addEventListener(
  "touchmove",
  function(event) {
    event.preventDefault();
  },
  false
);
