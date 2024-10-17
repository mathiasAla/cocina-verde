function validarPass() {
    let clave = document.querySelector("#clave");
    if (clave.value.length > 5 && clave.value.length < 13) {
        clave.classList.add("correct");
        clave.classList.remove("incorrect");
        document.querySelector("#Error-clave").innerHTML = "&nbsp;";
    }else {
        clave.classList.add("incorrect");
        clave.classList.remove("correct");
        document.querySelector("#error-clave").innerHTML = "Error, ingrese entre 6 y 12 caracteres.";
    }
}

function validarPass2() {
    let clave2 = document.querySelector("#clave2");
    if (clave2.value.length > 5 && clave2.value.length < 13) {
        clave2.classList.add("correct");
        clave2.classList.remove("incorrect");
        document.classList.querySelector("#error-clave").innerHTML = "&nbsp;";
    }else {
        clave2.classList.add("incorrect");
        clave2.classList.remove("correct");
        document.querySelector("#error-clave").innerHTML = "Ambas contraseñas deben ser iguales.";
    }

}

function validarCorreo() {
    let correo = document.querySelector("#correo");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo.value.match(regex)) {
        correo.classList.add("correct");
        correo.classList.remove("incorrect");
        document.querySelector("#error-correo").innerHTML = "&nbsp;";
    }else {
        correo.classList.add("correct");
        correo.classList.remove("incorrect");
        document.querySelector("#error-correo").innerHTML = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
    }
}


function validarNombre() {
    let nombre = document.querySelector("#nombre");
    if (nombre.value.length > 4 && nombre.value.length < 16) {
        nombre.classList.add("correct");
        nombre.classList.remove("incorrect");
        document.querySelector("#error-nombre").innerHTML = "&nbsp;";
    }else{
        nombre.classList.add("correct");
        nombre.classList.remove("incorrect");
        document.querySelector("#error-nombre").innerHTML = "El nombre tiene que ser de 4 a 16 letras.";
    }
}

function validarRut() {
    let rut = document.querySelector("#rut").value;
    if (rut.length <= 9) {
        document.querySelector("#rut").classList.add("correct");
        document.querySelector("#rut").classList.remove("incorrect");
        document.querySelector("#error-rut").innerHTML = "&nbsp;";
    } else {
        document.querySelector("#rut").classList.add("incorrect");
        document.querySelector("#rut").classList.remove("correct");
        document.querySelector("#error-rut").innerHTML = "El RUT debe tener un máximo de 9 caracteres.";
    }
}

function validarContacto() {
    let contacto = document.querySelector("#contacto").value;
    let regex = /^\d{11}$/;
    if (contacto.match(regex)) {
        document.querySelector("#contacto").classList.add("correct");
        document.querySelector("#contacto").classList.remove("incorrect");
        document.querySelector("#error-contacto").innerHTML = "&nbsp;";
    } else {
        document.querySelector("#contacto").classList.add("incorrect");
        document.querySelector("#contacto").classList.remove("correct");
        document.querySelector("#error-contacto").innerHTML = "El contacto debe tener exactamente 11 dígitos.";
    }
}