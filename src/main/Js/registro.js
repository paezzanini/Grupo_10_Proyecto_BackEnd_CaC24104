var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var fechaNac = document.getElementById("fechaNac");
var pais = document.getElementById("pais");
var check = document.getElementById("check");
var errorNombre = document.getElementById("errorNombre");
var errorApellido = document.getElementById("errorApellido");
var errorEmail = document.getElementById("errorEmail");
var errorPass = document.getElementById("errorPass");
var errorFechaNac = document.getElementById("errorFechaNac");
var errorPais = document.getElementById("errorPais");
var errorCheck = document.getElementById("errorCheck");

function enviar() {
    if (nombre.value === null || nombre.value === "") {
        errorNombre.innerHTML = "ingrese su Nombre";
    } else {
        errorNombre.innerHTML = "";
    }
    if (apellido.value === null || apellido.value === "") {
        errorApellido.innerHTML = "ingrese su Apellido";
    } else {
        errorApellido.innerHTML = "";
    }
    if (email.value === null || email.value === "") {
        errorEmail.innerHTML = "ingrese su Email";
    } else {
        errorEmail.innerHTML = "";
    }
    if (pass.value === null || pass.value === "") {
        errorPass.innerHTML = "ingrese su Contraseña";
    } else {
        errorPass.innerHTML = "";
    }
    if (fechaNac.value === null || fechaNac.value === "") {
        errorFechaNac.innerHTML = "ingrese su Fecha de nacimiento";
    } else {
        errorFechaNac.innerHTML = "";
    }
    if (pais.value === null || pais.value === "") {
        errorPais.innerHTML = "ingrese su Nacionalidad";
    } else {
        errorPais.innerHTML = "";
    }
    if (!check.checked) {
        errorCheck.innerHTML = "si está de acuerdo acepte los TyC";
    } else {
        errorCheck.innerHTML = "";
    }

    return false;
}
