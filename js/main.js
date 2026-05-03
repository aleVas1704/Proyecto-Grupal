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

// BOTÓN TOP (NUEVO)
const backToTop = document.querySelector("#backToTop");

// NAV LINKS (NUEVO)
const navLinks = document.querySelectorAll(".nav-links a");

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

// COMANDOS
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

// TARJETA
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
  activateCopyButtons();
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

// COPIAR
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

// BOTÓN SUBIR (NUEVO 🔥)
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

  updateActiveNavLink();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// NAV ACTIVA (NUEVO 🔥)
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;

    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// INICIAR
renderNotes();
updateActiveNavLink();

console.log("Camila 10 COMPLETO 🚀");
