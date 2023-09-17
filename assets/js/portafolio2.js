var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$("#card-title1").click(function(){
    $("#descripcion1").toggle(100);
});

$("#card-title2").click(function(){
    $("#descripcion2").toggle(100);
});

$("#card-title3").click(function(){
    $("#descripcion3").toggle(100);
});

$("#card-title4").click(function(){
    $("#descripcion4").toggle(100);
});

$("#enviar").click(function(){
    alert("El mensaje fue enviado correctamente");
});