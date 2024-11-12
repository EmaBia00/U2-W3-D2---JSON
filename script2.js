// Inizializza il contatore dal sessionStorage (se presente)
let count = parseInt(sessionStorage.getItem("counter")) || 0;

// Incremento count al secondo
function addCount() {
  count++;
  sessionStorage.setItem("counter", count);
  updateCounter();
}

// Aggiorna contatore
function updateCounter() {
  const timer = document.getElementById("timer");
  timer.innerText = count;
}

// Start e Update del count al caricamento della pagina
window.addEventListener("DOMContentLoaded", function () {
  // Start del contatore al secondo
  setInterval(addCount, 1000);

  // Update del contatore
  updateCounter();

  // Resetta il contatore al click del bottone
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.onclick = () => {
    sessionStorage.removeItem("counter");
    count = 0;
    updateCounter();
  };
});
