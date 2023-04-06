import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = React.useState([]);

  function addNotes(newNotes) {
    setNote((prevNote) => {
      return [...prevNote, newNotes];
    });
  }
  function deleteNote(id) {
    setNote((prevNote) => {
      return( prevNote.filter((newnote, index) => {
       index !== id;
      }));
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {note.map((createNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={createNote.title}
            content={createNote.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
