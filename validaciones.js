
// Obtener los campos
const nombre = document.getElementById("nombre");
const paterno = document.getElementById("paterno");
const materno = document.getElementById("materno");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const gmail = document.getElementById("gmail");

const formulario = document.getElementById("formulario");

// Expresiones regulares
const letras = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]*$/;
const numeros = /^[0-9]*$/;
const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// =================================
// VALIDAR NOMBRES Y APELLIDOS
// =================================

function filtrarLetras(campo, idError) {

    // Eliminar números y caracteres especiales
    campo.value = campo.value.replace(
        /[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]/g, ""
    );

    // Convertir a mayúsculas
    campo.value = campo.value.toLocaleUpperCase("es-MX");

    const error = document.getElementById(idError);

    if (campo.value.trim() === "") {
        error.textContent = "Este campo es obligatorio";
        campo.className = "incorrecto";
        return false;
    }

    if (campo.value.length > 100) {
        error.textContent = "Máximo 100 letras";
        campo.className = "incorrecto";
        return false;
    }

    error.textContent = "";
    campo.className = "correcto";
    return true;
}


// =================================
// VALIDAR EDAD
// =================================

function filtrarEdad() {

    // Eliminar letras, espacios y caracteres especiales
    edad.value = edad.value.replace(/[^0-9]/g, "");

    // Máximo 3 números
    edad.value = edad.value.slice(0, 3);

    const error = document.getElementById("errorEdad");

    if (edad.value === "") {
        error.textContent = "La edad es obligatoria";
        edad.className = "incorrecto";
        return false;
    }
    //solo mayores de 18 años
    if (parseInt(edad.value) <18){
        error.textContent="Debes ser mayor de edad";
        edad.className="incorrecto";
        return false;
    }
    error.textContent = "";
    edad.className = "correcto";

    return true;
}


// =================================
// VALIDAR TELEFONO
// =================================

function filtrarTelefono() {

    // Eliminar todo lo que no sea número
    telefono.value = telefono.value.replace(/[^0-9]/g, "");

    // Máximo 16 números
    telefono.value = telefono.value.slice(0, 16);

    const error = document.getElementById("errorTelefono");

    if (telefono.value === "") {
        error.textContent = "El teléfono es obligatorio";
        telefono.className = "incorrecto";
        return false;
    }

    if (telefono.value.length !== 16) {
        error.textContent = "El teléfono debe tener 16 números";
        telefono.className = "incorrecto";
        return false;
    }

    error.textContent = "";
    telefono.className = "correcto";

    return true;
}


// =================================
// VALIDAR CORREO ELECTRÓNICO
// =================================

function validarGmail() {

    const error = document.getElementById("errorGmail");

    if (gmail.value.trim() === "") {
        error.textContent = "El correo es obligatorio";
        gmail.className = "incorrecto";
        return false;
    }

    if (!correoValido.test(gmail.value)) {
        error.textContent = "Ingresa un correo válido";
        gmail.className = "incorrecto";
        return false;
    }

    error.textContent = "";
    gmail.className = "correcto";

    return true;
}


// =================================
// VALIDACIONES EN TIEMPO REAL
// =================================

nombre.addEventListener("input", () =>
    filtrarLetras(nombre, "errorNombre")
);

paterno.addEventListener("input", () =>
    filtrarLetras(paterno, "errorPaterno")
);

materno.addEventListener("input", () =>
    filtrarLetras(materno, "errorMaterno")
);

edad.addEventListener("input", filtrarEdad);

telefono.addEventListener("input", filtrarTelefono);

gmail.addEventListener("input", validarGmail);


// =================================
// VALIDAR FORMULARIO COMPLETO
// =================================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const v1 = filtrarLetras(nombre, "errorNombre");
    const v2 = filtrarLetras(paterno, "errorPaterno");
    const v3 = filtrarLetras(materno, "errorMaterno");
    const v4 = filtrarEdad();
    const v5 = filtrarTelefono();
    const v6 = validarGmail();

    const mensaje = document.getElementById("mensaje");

    if (v1 && v2 && v3 && v4 && v5 && v6) {

        mensaje.textContent = "¡Supscripcion Exitosa!";
        mensaje.className = "exito";

        alert("¡Todos los datos son correctos!");

// Mandar a la página principal
window.location.href = "index.html";

    } else {

        mensaje.textContent = "Corrige los campos incorrectos.";
        mensaje.className = "error";

        alert("Verifica los datos de la suscripció.");
    }

});
