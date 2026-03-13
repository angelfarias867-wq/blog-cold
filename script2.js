// SELECTORES (Captura de elementos HTML)
const h3Preguntas = document.querySelectorAll('h3');
const botonesOpcion = document.querySelectorAll('.btn-opcion');
const btnFinalizar = document.getElementById('btn-finalizar');
const pantallaRes = document.getElementById('pantalla-resultado');
const textoRes = document.getElementById('texto-resultado');
const todasLasPreguntas = document.querySelectorAll('.opciones');

// VARIABLES (Estado de la aplicación)
let aciertos = 0;

// FUNCIONES (La lógica de las acciones)
// Función para darle estilo a las preguntas
const EstiloPreguntas = () => {
    h3Preguntas.forEach(pregunta => {
        pregunta.classList.add('cyan');
    });
};

// Función para manejar la selección de una respuesta
const seleccionarOpcion = (botonClickeado) => {
    botonClickeado.classList.add('seleccionado'); //revisar si es innecesaria
    const respuestaCorrecta = contenedor.getAttribute('data-correct');
    
    if (botonClickeado.innerText === respuestaCorrecta) {
        console.log("¡Correcto!");
    }
};

// Función para calcular el puntaje y mostrar el cuadro final
const mostrarResultadoFinal = () => {
    aciertos = 0; 
    todasLasPreguntas.forEach(pregunta => {
        const correcta = pregunta.getAttribute('data-correct');
        const elegida = pregunta.querySelector('.btn-opcion.seleccionado');//se busca el boton seleccionado

        if (elegida.innerText === correcta) {
            aciertos++; // se compara las respuestas elegidas con las respuestas correctas
        }
    });

    // se muestra el total de aciertos en el texto del resultado
    textoRes.innerText = `Lograste ${aciertos} de ${todasLasPreguntas.length} puntos`; 
    pantallaRes.classList.remove('hidden'); // se hace visible el cuadro de resultados quitando la clase 'hidden'
};

// LLAMADO A LAS FUNCIONES

// Ejecutar estilos iniciales
EstiloPreguntas();

// Eventos para los botones de las opciones
botonesOpcion.forEach(boton => {
    boton.addEventListener('click', function() {
        seleccionarOpcion(this); //se usa this para señalar cual fue el boton seleccionado
    });
});

// Evento para el botón de finalizar
btnFinalizar.addEventListener('click', mostrarResultadoFinal);