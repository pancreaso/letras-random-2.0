// Array con todas las letras del abecedario
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let letrasRestantes = [...letras];

// Referencias a los elementos del DOM
const randomButton = document.getElementById("randomButton");
const letterContainer = document.getElementById("letterContainer");
const resetButton = document.getElementById("resetButton");

// Función para mostrar una letra al azar con un retraso
randomButton.addEventListener("click", () => {
    if (letrasRestantes.length > 0) {
        // Mostrar un mensaje de "Cargando..."
        letterContainer.textContent = "Cargando...";
        
        // Esperar 2 segundos antes de mostrar la letra al azar
        setTimeout(() => {
            // Obtener una letra al azar y mostrarla
            const indice = Math.floor(Math.random() * letrasRestantes.length);
            const letraSeleccionada = letrasRestantes[indice];
            letterContainer.textContent = letraSeleccionada;

            // Eliminar la letra seleccionada del array
            letrasRestantes.splice(indice, 1);
        }, 2000); // 2000 milisegundos = 2 segundos
    } else {
        letterContainer.textContent = "No hay más letras";
    }
});

// Función para reiniciar la lista de letras
resetButton.addEventListener("click", () => {
    letrasRestantes = [...letras];
    letterContainer.textContent = "";
});
