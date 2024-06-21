document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('add-note');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    addNoteButton.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            addNote(noteText);
            noteInput.value = '';
        }
    });

    notesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-note')) {
            e.target.parentElement.remove();
        }
    });

    function addNote(text) {
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerHTML = `
            ${text}
            <button class="delete-note">x</button>
        `;
        notesList.appendChild(note);
    }
});
