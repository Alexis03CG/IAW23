/* Rellena este fichero */
$(document).ready(function () {
    $("#btn-ocultar").click(function (e) { 
        e.preventDefault();
        $(".pares").hide();
        $("#encabezado").hide();
    });
    $("#btn-mostrar").click(function (e) { 
        e.preventDefault();
        $(".pares").show();
        $("#encabezado").show();
    });
});