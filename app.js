let fechaInicio = new Date("2024-01-20T00:00:00"); // Fecha de inicio

function actualizarContador() {
    let ahora = new Date(); // Fecha y hora actuales
    let diferencia = ahora - fechaInicio;

    let segundos = Math.floor((diferencia / 1000) % 60);
    let minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    let horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("contador").textContent = `${dias}\n Días: ${horas}\n Horas: ${minutos}\n Minutos: ${segundos}\nSegundos: `;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

function suscribir() {
    let correo = document.getElementById("email").value;
    // Aquí puedes hacer algo con el correo, como enviarlo a un servidor
    console.log("Correo suscrito:", correo);
}
