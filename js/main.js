import { notes } from "./data.js";

const notesGrid = document.querySelector("#notesGrid");

// PROGRESO
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");

// BUSCADOR
const searchInput = document.querySelector("#searchInput");
let currentSearch = "";

// FILTROS
const filterButtons = document.querySelectorAll(".filter-btn");
let currentFilter = "all";

// LOCAL STORAGE
let openedNotes = JSON.parse(localStorage.getItem("openedNotes")) || [];

function saveOpenedNotes() {
  localStorage.setItem("openedNotes", JSON.stringify(openedNotes));
}

// FILTRAR
function getFilteredNotes() {
  return notes.filter(note => {
    const matchesFilter =
      currentFilter === "all" || note.category === currentFilter;

    const text = `
      ${note.title}
      ${note.summary}
      ${note.description}
      ${note.commands.map(c => c.command).join(" ")}
    `.toLowerCase();

    const matchesSearch = text.includes(currentSearch.toLowerCase());

    return matchesFilter && matchesSearch;
  });
}

// CREAR COMANDO (NUEVO)
function createCommandItem(cmd) {
  return `
    <div class="command-item">
      <div>
        <code>${cmd.command}</code>
        <p>${cmd.description}</p>
      </div>
      <button class="copy-btn" data-command="${cmd.command}">
        Copiar
      </button>
    </div>
  `;
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

        <div class="commands-list">
          ${note.commands.map(createCommandItem).join("")}
        </div>
      </div>

    </article>
  `;
}

// RENDER
function renderNotes() {
  const filtered = getFilteredNotes();

  notesGrid.innerHTML = filtered.map(createNoteCard).join("");

  activateNoteEvents();
  activateCopyButtons(); // ← NUEVO
  updateProgress();
}

// EVENTOS TARJETAS
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

// COPIAR (NUEVO 🔥)
function activateCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const command = btn.dataset.command;

      navigator.clipboard.writeText(command).then(() => {
        btn.textContent = "Copiado";

        setTimeout(() => {
          btn.textContent = "Copiar";
        }, 1200);
      });
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

// BUSCADOR
searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value.trim();
  renderNotes();
});

// FILTROS
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderNotes();
  });
});

// INICIAR
renderNotes();

console.log("Camila 9 listo 🚀");
