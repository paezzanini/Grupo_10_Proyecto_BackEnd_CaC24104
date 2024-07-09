function enviar(event) {
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

    var isValid = true;

    if (nombre.value === null || nombre.value === "") {
        errorNombre.innerHTML = "Ingrese su Nombre";
        isValid = false;
    } else {
        errorNombre.innerHTML = "";
    }
    if (apellido.value === null || apellido.value === "") {
        errorApellido.innerHTML = "Ingrese su Apellido";
        isValid = false;
    } else {
        errorApellido.innerHTML = "";
    }
    if (email.value === null || email.value === "") {
        errorEmail.innerHTML = "Ingrese su Email";
        isValid = false;
    } else {
        errorEmail.innerHTML = "";
    }
    if (pass.value === null || pass.value === "") {
        errorPass.innerHTML = "Ingrese su Contraseña";
        isValid = false;
    } else {
        errorPass.innerHTML = "";
    }
    if (fechaNac.value === null || fechaNac.value === "") {
        errorFechaNac.innerHTML = "Ingrese su Fecha de nacimiento";
        isValid = false;
    } else {
        errorFechaNac.innerHTML = "";
    }
    if (pais.value === null || pais.value === "") {
        errorPais.innerHTML = "Ingrese su Nacionalidad";
        isValid = false;
    } else {
        errorPais.innerHTML = "";
    }
    if (!check.checked) {
        errorCheck.innerHTML = "Si está de acuerdo acepte los TyC";
        isValid = false;
    } else {
        errorCheck.innerHTML = "";
    }

    if (isValid) {
        // Si es válido, envía el formulario
        guardarUsuario(event);
        
        return true;
    } else {
        // Si no es válido, previene el envío del formulario
        event.preventDefault();
        return false;
        
    }
}