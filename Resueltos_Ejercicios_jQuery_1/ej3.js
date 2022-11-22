/* Rellena este fichero */
$(document).ready(function () {
    $("#btn-aumentar").click(function (e) { 
        e.preventDefault();
        $(".pares").css("font-size", "200%");
        $("#encabezado").css("font-size", "200%");
    });
    $("#btn-disminuir").click(function (e) { 
        e.preventDefault();
        $(".pares").css("font-size", "100%");
        $("#encabezado").css("font-size", "100%");
    });
});