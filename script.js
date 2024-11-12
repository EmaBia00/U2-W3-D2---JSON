// Aggiornamento nome nell'h1
function updateName() {
  const name = localStorage.getItem("userName");
  const title = document.getElementById("savedName");
  if (name) {
    title.innerText = `Ciao, ${name}!`;
  } else {
    title.innerText = "Benvenuto! Inserisci il tuo nome:";
  }
}

// Salvataggio nome nel localStorage
function saveName() {
  const nameInput = document.getElementById("nameInput").value;
  if (nameInput) {
    localStorage.setItem("userName", nameInput);
    updateName();
    // Azzero il valore dell'input dopo il salvataggio
    document.getElementById("nameInput").value = "";
  } else {
    alert("Per favore, inserisci un nome.");
  }
}

// Funzione per rimuovere il nome dal localStorage
function removeName() {
  localStorage.removeItem("userName");
  updateName();
}

// Inizio programma al caricamento della pagina
window.addEventListener("DOMContentLoaded", function () {
  // Assegnazione Input
  const saveBtn = document.getElementById("saveButton");
  const removeBtn = document.getElementById("removeButton");

  saveBtn.onclick = saveName;
  removeBtn.onclick = removeName;
  updateName();
});
