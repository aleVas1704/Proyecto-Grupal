import { notes } from "./data.js";

const notesGrid = document.querySelector("#notesGrid");

let openedNotes = JSON.parse(localStorage.getItem("openedNotes")) || [];

function saveOpenedNotes() {
  localStorage.setItem("openedNotes", JSON.stringify(openedNotes));
}

function createNoteCard(note) {
  const isOpen = openedNotes.includes(note.id);

  return `
    <article class="note-card ${isOpen ? "open" : ""}" data-id="${note.id}">
      <div class="note-header">
        <h3>${note.title}</h3>
        <p>${note.summary}</p>
      </div>

      <div class="note-body">
        <p>${note.description}</p>
      </div>
    </article>
  `;
}

function renderNotes() {
  notesGrid.innerHTML = notes.map(createNoteCard).join("");
  activateNoteEvents();
}

function activateNoteEvents() {
  document.querySelectorAll(".note-card").forEach(card => {
    const id = card.dataset.id;

    card.querySelector(".note-header").addEventListener("click", () => {
      card.classList.toggle("open");

      if (card.classList.contains("open")) {
        openedNotes.push(id);
      } else {
        openedNotes = openedNotes.filter(n => n !== id);
      }

      saveOpenedNotes();
    });
  });
}

renderNotes();
