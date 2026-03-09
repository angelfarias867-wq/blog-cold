// 1. SELECTORES (Captura de elementos HTML)
const h3Preguntas = document.querySelectorAll('h3');
const botonesOpcion = document.querySelectorAll('.btn-opcion');
const btnFinalizar = document.getElementById('btn-finalizar');
const pantallaRes = document.getElementById('pantalla-resultado');
const textoRes = document.getElementById('texto-resultado');
const todasLasPreguntas = document.querySelectorAll('.opciones');

// 2. VARIABLES (Estado de la aplicación)
let aciertos = 0;

// 3. FUNCIONES (La lógica de las acciones)

// Función para darle estilo visual a las preguntas al cargar
function EstiloPreguntas() {
    h3Preguntas.forEach(pregunta => {
        pregunta.classList.add('cyan');
    });
}

// Función para manejar la selección de una respuesta
function seleccionarOpcion(botonClickeado) {
    const contenedor = botonClickeado.parentElement;

    // Limpiar selección previa en ese grupo
    contenedor.querySelectorAll('.btn-opcion').forEach(btn => {
        btn.classList.remove('seleccionado');
    });

    // Marcar la nueva opción
    botonClickeado.classList.add('seleccionado');

    // Feedback inmediato en consola (Opcional)
    const respuestaCorrecta = contenedor.getAttribute('data-correct');
    if (botonClickeado.innerText === respuestaCorrecta) {
        console.log("¡Correcto!");
    }
}

// Función para calcular el puntaje y mostrar el cuadro final
function mostrarResultadoFinal() {
    aciertos = 0; // Reiniciamos el contador antes de calcular

    todasLasPreguntas.forEach(pregunta => {
        const correcta = pregunta.getAttribute('data-correct');
        const elegida = pregunta.querySelector('.btn-opcion.seleccionado');

        if (elegida && elegida.innerText === correcta) {
            aciertos++;
        }
    });

    // Escribir el texto y mostrar la pantalla central
    textoRes.innerText = `Lograste ${aciertos} de ${todasLasPreguntas.length} puntos`;
    pantallaRes.classList.remove('hidden');
}

// 4. LLAMADO A LAS FUNCIONES

// Ejecutar estilos iniciales
EstiloPreguntas();

// Eventos para los botones de las opciones
botonesOpcion.forEach(boton => {
    boton.addEventListener('click', function() {
        seleccionarOpcion(this);
    });
});

// Evento para el botón de finalizar
btnFinalizar.addEventListener('click', mostrarResultadoFinal);