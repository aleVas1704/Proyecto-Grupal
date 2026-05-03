import { notes } from "./data.js";

const notesGrid = document.querySelector("#notesGrid");

// PROGRESO
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");

// BUSCADOR
const searchInput = document.querySelector("#searchInput");
let currentSearch = "";

// LOCAL STORAGE
let openedNotes = JSON.parse(localStorage.getItem("openedNotes")) || [];

function saveOpenedNotes() {
  localStorage.setItem("openedNotes", JSON.stringify(openedNotes));
}

// FILTRAR (NUEVO)
function getFilteredNotes() {
  return notes.filter(note => {
    const text = `
      ${note.title}
      ${note.summary}
      ${note.description}
    `.toLowerCase();

    return text.includes(currentSearch.toLowerCase());
  });
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
  const filtered = getFilteredNotes();

  notesGrid.innerHTML = filtered.map(createNoteCard).join("");

  activateNoteEvents();
  updateProgress();
}

// EVENTOS
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
      updateProgress();
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

// EVENTO BUSCADOR (NUEVO)
searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value.trim();
  renderNotes();
});

// INICIAR
renderNotes();

console.log("Camila 7 listo 🔍");
