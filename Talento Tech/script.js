
function mostrarMensaje() {
    alert("¡Bienvenida a mi página web!");
}

// Validación del formulario de contacto
function validarFormulario() {
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    alert("Formulario enviado correctamente.");
    return true;
}
