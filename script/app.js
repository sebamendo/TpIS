
document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al sub-div con id "select-client"
    var selectClientDiv = document.getElementById("select-client");

    // Muestra el sub-div "select-client" al cargar la página
    selectClientDiv.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencias a los elementos div y al botón
    var selectClientDiv = document.getElementById("select-client");
    var selectProductDiv = document.getElementById("select-product");
    var selectPagoDiv = document.getElementById("forma-pago");
    var selctCompraDiv = document.getElementById("compra-ok");
    var toggleButton = document.getElementById("clienteOK");
    var toggleButton1 = document.getElementById("productoOK");
    var toggleButton2 = document.getElementById("pagoOK");
    var toggleButton3 = document.getElementById("finalizar");

    // Mostrar selectClientDiv al principio
    selectClientDiv.style.display = "block";
    selectProductDiv.style.display = "none";
    selectPagoDiv.style.display = "none";
    selctCompraDiv.style.display = "none";

    // Agrega un evento click al botón toggleButton
    toggleButton.addEventListener("click", function () {
        // Verifica si el div select-client está visible
        if (selectClientDiv.style.display === "block") {
            // Oculta select-client y muestra select-product
            selectClientDiv.style.display = "none";
            selectProductDiv.style.display = "block";
        }
    });

    // Agrega un evento click al botón toggleButton1
    toggleButton1.addEventListener("click", function () {
        // Verifica si el div select-product está visible
        if (selectProductDiv.style.display === "block") {
            // Oculta select-product y muestra selectPagoDiv
            selectProductDiv.style.display = "none";
            selectPagoDiv.style.display = "block";
        }
    });

    // Agrega un evento click al botón toggleButton2
    toggleButton2.addEventListener("click", function () {
        // Verifica si el div selectPagoDiv está visible
        if (selectPagoDiv.style.display === "block") {
            // Oculta selectPagoDiv y muestra selctCompraDiv
            selectPagoDiv.style.display = "none";
            selctCompraDiv.style.display = "block";
        }
    });

    // Agrega un evento click al botón toggleButton3
    toggleButton3.addEventListener("click", function () {
        // Verifica si el div selctCompraDiv está visible
        if (selctCompraDiv.style.display === "block") {
            // Oculta selctCompraDiv y muestra selectClientDiv
            selctCompraDiv.style.display = "none";
            selectClientDiv.style.display = "block";
        }
    });
});



