function controlarAudio(event, idAudio) {
    event.stopPropagation(); // Evita que el click cierre la tarjeta
    const audio = document.getElementById(idAudio);
    const boton = event.currentTarget;

    if (audio.paused) {
        audio.play();
        boton.innerHTML = '<i class="fas fa-pause"></i> Pausar';
        boton.style.background = 'var(--rosa)';
    } else {
        audio.pause();
        boton.innerHTML = '<i class="fas fa-play"></i> Reproducir';
        boton.style.background = 'var(--cian)';
    }
}

let audioReproduciendo = null;

function controlarAudio(event, idAudio) {
    event.stopPropagation();

    const audioClickeado = document.getElementById(idAudio);
    const botonClickeado = event.currentTarget;

    document.querySelectorAll('audio').forEach(audio => {
        if (audio !== audioClickeado) {
            if (!audio.paused) {
                audio.pause();
            }
            // Resetear botón asociado
            const boton = document.querySelector(`button[onclick*="controlarAudio(event, '${audio.id}')]`);
            if (boton) {
                boton.innerHTML = '<i class="fas fa-play"></i> Reproducir';
                boton.style.background = 'var(--cian)';
            }
        }
    });

    if (audioClickeado.paused) {
        audioClickeado.play().catch(err => {
            console.log("Error al reproducir audio:", err);
        });
        botonClickeado.innerHTML = '<i class="fas fa-pause"></i> Pausar';
        botonClickeado.style.background = 'var(--rosa)';
        audioReproduciendo = audioClickeado;
    } else {
        // Pausar
        audioClickeado.pause();
        botonClickeado.innerHTML = '<i class="fas fa-play"></i> Reproducir';
        botonClickeado.style.background = 'var(--cian)';
        if (audioReproduciendo === audioClickeado) {
            audioReproduciendo = null;
        }
    }
}

document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('ended', () => {
        const boton = document.querySelector(`button[onclick*="controlarAudio(event, '${audio.id}')]`);
        if (boton) {
            boton.innerHTML = '<i class="fas fa-play"></i> Reproducir';
            boton.style.background = 'var(--cian)';
        }
        if (audioReproduciendo === audio) {
            audioReproduciendo = null;
        }
    });
});