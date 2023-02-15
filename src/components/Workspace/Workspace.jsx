import React, { useContext } from "react";
import { NotesContext } from "../../state/NotesProvider";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NoteItem from "./NoteItem/NoteItem";

export default function Workspace() {
  const notes = useContext(NotesContext);

  // let activeNote;
  if (notes) {
    notes.forEach((note) => {
      // if (note.isActive) activeNote = note;
    });
  }

  return (
    <div>
      {notes ? (
        <Routes>
          <Route path={`note/${notes ? 1 : 1}`} element={<NoteItem />} />
        </Routes>
      ) : (
        "loading"
      )}
    </div>
  );
}
