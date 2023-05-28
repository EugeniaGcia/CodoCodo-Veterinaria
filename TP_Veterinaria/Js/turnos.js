// Restricciones de fecha y hora
var formulario = document.getElementById('formulario')
var fechaTurnoInput = document.getElementById('fecha-turno')
var horaTurnoInput = document.getElementById('hora-turno')
var errorFecha = document.getElementById('error-fecha')

formulario.addEventListener('submit', function (event) {
    var fechaTurno = new Date(fechaTurnoInput.value)
    var horaTurno = horaTurnoInput.value.split(':')
    var turnoValido = true;


    var diaSemana = fechaTurno.getDay()
    var hora = parseInt(horaTurno[0])
    var minuto = parseInt(horaTurno[1])

    if (diaSemana === 0 || diaSemana === 6) { 
        turnoValido = false;
        errorFecha.textContent = 'Lo sentimos, solo se aceptan turnos de lunes a viernes.';
    }

    if (hora < 9 || hora >= 20) { 
        turnoValido = false;
        errorFecha.textContent = 'Lo sentimos, los turnos solo están disponibles de 9am a 20pm.';
    }

    if (!turnoValido) {
        event.preventDefault() 
    } else {
        errorFecha.textContent = ''
    }
});