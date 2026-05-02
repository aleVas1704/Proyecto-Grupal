import { notes } from "./data.js";

const notesGrid = document.querySelector("#notesGrid");

function renderNotes() {
  notesGrid.innerHTML = notes.map(note => `
    <article class="note-card">
      <h3>${note.title}</h3>
      <p>${note.summary}</p>
    </article>
  `).join("");
}

renderNotes();
