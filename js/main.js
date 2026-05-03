import { notes } from "./data.js";

const notesGrid = document.querySelector("#notesGrid");

// NUEVO (progreso)
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");

// LOCAL STORAGE
let openedNotes = JSON.parse(localStorage.getItem("openedNotes")) || [];

function saveOpenedNotes() {
  localStorage.setItem("openedNotes", JSON.stringify(openedNotes));
}

// CREAR TARJETA
function createNoteCard(note) {
  const isOpen = openedNotes.includes(note.id);

  return `
    <article class="note-card ${isOpen ? "open" : ""}" data-id="${note.id}">
      
      <div class="note-header">
        <div class="note-meta">
          <span class="note-class">${note.classNumber}</span>
          <span class="note-level">${note.level}</span>
        </div>

        <h3>${note.title}</h3>
        <p>${note.summary}</p>
      </div>

      <div class="note-body">
        <p>${note.description}</p>
      </div>

    </article>
  `;
}

// RENDER
function renderNotes() {
  notesGrid.innerHTML = notes.map(createNoteCard).join("");
  activateNoteEvents();
  updateProgress(); // ← IMPORTANTE
}

// EVENTOS (abrir/cerrar)
function activateNoteEvents() {
  document.querySelectorAll(".note-card").forEach(card => {
    const id = card.dataset.id;

    card.querySelector(".note-header").addEventListener("click", () => {
      card.classList.toggle("open");

      if (card.classList.contains("open")) {
        if (!openedNotes.includes(id)) {
          openedNotes.push(id);
        }
      } else {
        openedNotes = openedNotes.filter(n => n !== id);
      }

      saveOpenedNotes();
      updateProgress(); // ← IMPORTANTE
    });
  });
}

// PROGRESO
function updateProgress() {
  const total = notes.length;
  const opened = openedNotes.length;
  const percent = total === 0 ? 0 : Math.round((opened / total) * 100);

  progressText.textContent = `${opened} de ${total} apuntes abiertos`;
  progressBar.style.width = percent + "%";
}

// INICIAR
renderNotes();

console.log("Camila 6 listo");
