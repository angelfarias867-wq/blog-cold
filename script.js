let audioActual = null;

function controlarAudio(event, idAudio) {
    event.stopPropagation();

    const audioSeleccionado = document.getElementById(idAudio);
    const boton = event.currentTarget;

    if (audioActual && audioActual !== audioSeleccionado) {
        audioActual.pause();
    }

    if (audioSeleccionado.paused) {
        audioSeleccionado.play();
        boton.innerHTML = '<i class="fas fa-pause"></i> Pausar';
        audioActual = audioSeleccionado;
    } else {
        audioSeleccionado.pause();
        boton.innerHTML = '<i class="fas fa-play"></i> Reproducir';
        audioActual = null;
    }
}

document.querySelectorAll('audio').forEach(audio => {
    audio.onended = () => audioActual = null;
});