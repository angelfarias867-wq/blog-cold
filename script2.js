const preguntas = document.querySelectorAll('h3');

document.querySelectorAll('h3').forEach(pregunta => {
    pregunta.classList.add('cyan');
});

// Seleccionamos todos los botones de opciones
const botones = document.querySelectorAll('.btn-opcion');

botones.forEach(boton => {
    boton.addEventListener('click', function () {
        const contenedor = this.parentElement;

        contenedor.querySelectorAll('.btn-opcion').forEach(btn => {
            btn.classList.remove('seleccionado');
        });

        this.classList.add('seleccionado');

        const respuestaCorrecta = contenedor.getAttribute('data-correct');
        if (this.innerText === respuestaCorrecta) {
            console.log("¡Correcto!");
        }
    });
});

// 1. SELECTORES: Guardamos los elementos que vamos a usar
const botonesOpcion = document.querySelectorAll('.btn-opcion');
const btnFinalizar = document.getElementById('btn-finalizar');
const pantallaRes = document.getElementById('pantalla-resultado');
const textoRes = document.getElementById('texto-resultado');

// 2. LOGICA PARA SELECCIONAR OPCIONES
botonesOpcion.forEach(boton => {
    boton.addEventListener('click', function() {
        // Buscamos el grupo de esta pregunta
        const grupo = this.parentElement;

        // Quitamos la marca a los demás botones del mismo grupo
        grupo.querySelectorAll('.btn-opcion').forEach(b => b.classList.remove('seleccionado'));

        // Marcamos el botón que tocamos
        this.classList.add('seleccionado');
    });
});

// 3. LOGICA PARA FINALIZAR Y MOSTRAR RESULTADO
btnFinalizar.addEventListener('click', () => {
    let aciertos = 0;
    const preguntas = document.querySelectorAll('.opciones');

    preguntas.forEach(pregunta => {
        const correcta = pregunta.getAttribute('data-correct');
        const elegida = pregunta.querySelector('.btn-opcion.seleccionado');

        // Si elegiste la opción que coincide con la respuesta correcta
        if (elegida && elegida.innerText === correcta) {
            aciertos++;
        }
    });

    // Mostramos el anuncio central
    textoRes.innerText = `Lograste ${aciertos} de ${preguntas.length} puntos`;
    pantallaRes.classList.remove('hidden');
});