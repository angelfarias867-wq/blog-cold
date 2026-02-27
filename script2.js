const preguntas = document.querySelectorAll('h3');

// Recorremos cada <h3> y le agregamos la clase "cyan"
preguntas.forEach(pregunta => {
    pregunta.setAttribute("class", "cyan");
});