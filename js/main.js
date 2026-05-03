import { notes } from "./data.js";

const notesGrid = document.querySelector("#notesGrid");

function createNoteCard(note) {
  return `
    <article class="note-card" data-id="${note.id}">
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

function renderNotes() {
  notesGrid.innerHTML = notes.map(createNoteCard).join("");
  activateNoteEvents();
}

function activateNoteEvents() {
  document.querySelectorAll(".note-card").forEach(card => {
    card.querySelector(".note-header").addEventListener("click", () => {
      card.classList.toggle("open");
    });
  });
}

renderNotes();
