/* FUNCION PARA LA REPRODUCCION DE LAS CANCIONES */ 
function expandirAlbum(elemento) {
    // Si ya está activo, no hacemos nada (permitimos que el usuario interactúe)
    if (elemento.classList.contains('active')) return;

    // Cerramos cualquier otro álbum que esté abierto
    document.querySelectorAll('.tarjeta-album').forEach(tarjeta => {
        tarjeta.classList.remove('active');
        // Opcional: Pausar música de otros álbumes al cerrar
        const audio = tarjeta.querySelector('audio');
        if (audio) {
            audio.pause();
            const btn = tarjeta.querySelector('.boton-reproducir');
            if (btn) btn.innerHTML = '<i class="fas fa-play"></i> Reproducir';
        }
    });

    // Abrimos el actual
    elemento.classList.add('active');
}

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