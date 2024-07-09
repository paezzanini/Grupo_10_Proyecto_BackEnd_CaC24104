var email = document.getElementById("email");
var pass = document.getElementById("password");
var errorEmail = document.getElementById("errorEmail");
var errorPass = document.getElementById("errorPass");

function enviar() {
    if (email.value === null || email.value === "") {
        errorEmail.innerHTML = "Ingrese un email Valido";
    } else {
        errorEmail.innerHTML = "";
    }
    if (pass.value === null || pass.value === "") {
        errorPass.innerHTML = "Contraseña incorrecta";
    } else {
        errorPass.innerHTML = "";
    }

    return false;
}
