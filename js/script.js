function validacion() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("email").value;

    if (nombre.trim() == "" || telefono.trim() == "" || correo.trim() == "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    } 
    else if (!(/^\d{10}$/.test(telefono))) {
        alert("Por favor, introduzca un número de teléfono válido (10 dígitos).");
        return false;
    } 
    else if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo))) {
        alert("Por favor, introduzca una dirección de correo electrónico válida.");
        return false;
    } 
    else {
        alert('Apreciado ' + nombre + ', hemos recibido su mensaje. Nos comunicaremos al teléfono ' + telefono + ' o dirección de email ' + correo + ' en los próximos días.');
        return true;
    }
}