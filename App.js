// Integral application doman

import { useState } from "react";
import "./App.css";

function App() {

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {

    if (note.trim() === "") return;

    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((item, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="container">

      <h1>My Notes App</h1>

      <div className="noteBox">

        <input
          type="text"
          placeholder="Write a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button onClick={addNote}>Add Note</button>

      </div>

      <div className="notes">

        {notes.map((item, index) => (

          <div className="card" key={index}>

            <p>{item}</p>

            <button onClick={() => deleteNote(index)}>
              Delete
            </button>

          </div>

        ))}

      </div>

      <footer>

        <a
          href="https://github.com/Elishell79/NotesApp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repository
        </a>

      </footer>

    </div>
  );
}

export default App;
