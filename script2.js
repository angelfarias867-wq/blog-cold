const bancoPreguntas = [
    { p: "¿Cuántos álbumes tiene la banda?", o: ["9", "10", "13", "11"], r: "10" },
    { p: "¿Cuántos EP aparecen en la página?", o: ["1", "2", "3", "4"], r: "1" },
    { p: "¿Cuántas giras ha hecho la banda?", o: ["6", "7", "8", "9"], r: "8" },
    { p: "¿Cómo se llama la última gira?", o: ["Music of the Spheres World Tour", "A Head Full of Dreams", "The Eras Tour"], r: "Music of the Spheres World Tour" },
    { p: "¿Cómo se llama el mayor éxito del Mylo Xyloto?", o: ["Paradise", "Viva la Vida", "Orphans"], r: "Paradise" },
    { p: "¿En qué está inspirada la temática de MOTS?", o: ["The Queen", "Revolución Francesa", "Star Wars"], r: "Star Wars" }
];

let respuestasDelUsuario = {};

// Función para dibujar la trivia en pantalla
function inicializarTrivia() {
    const contenedor = document.getElementById('contenedor-trivia');
    
    bancoPreguntas.forEach((pregunta, i) => {
        const card = document.createElement('div');
        card.className = 'pregunta-card';
        card.innerHTML = `
            <h2>${pregunta.p}</h2>
            <div class="opciones-grid">
                ${pregunta.o.map(opcion => `
                    <button class="opcion-btn" onclick="marcarOpcion(this, ${i}, '${opcion}')">
                        ${opcion}
                    </button>
                `).join('')}
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Función para cuando el usuario hace clic en una opción
function marcarOpcion(boton, indexPregunta, valor) {
    // Desmarcar otros botones de la misma pregunta
    const botones = boton.parentElement.querySelectorAll('.opcion-btn');
    botones.forEach(b => b.classList.remove('selected'));
    
    // Marcar el actual
    boton.classList.add('selected');
    respuestasDelUsuario[indexPregunta] = valor;

    // Si ya respondió todas, mostrar el botón LISTO
    if (Object.keys(respuestasDelUsuario).length === bancoPreguntas.length) {
        document.getElementById('btn-listo').style.display = 'block';
    }
}

// Función final de resultados
function finalizarTrivia() {
    let puntos = 0;
    bancoPreguntas.forEach((p, i) => {
        if (respuestasDelUsuario[i] === p.r) puntos++;
    });

    document.getElementById('btn-listo').style.display = 'none';
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    
    document.getElementById('puntaje-texto').innerText = `¡Lograste ${puntos} de ${bancoPreguntas.length}!`;
    
    const mensaje = puntos === 6 ? "¡Eres un experto total! 🌌" : "¡Nada mal! Sigue explorando el universo Coldplay. 🎈";
    document.getElementById('mensaje-feedback').innerText = mensaje;
}

// Escuchar el botón de listo
document.getElementById('btn-listo').addEventListener('click', finalizarTrivia);

// Arrancar la trivia al cargar la página
window.onload = inicializarTrivia;