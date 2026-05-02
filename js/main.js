import { notes } from "./data.js";

const notesGrid = document.querySelector("#notesGrid");

function renderNotes() {
  notesGrid.innerHTML = notes.map(note => `
    <article class="note-card">
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
  `).join("");
}

renderNotes();
