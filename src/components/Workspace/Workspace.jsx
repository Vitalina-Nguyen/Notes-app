import '../../scss/components/Workspace.scss'
import React, { useContext } from 'react';
import { NotesContext } from '../../state/NotesProvider';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Note from "./Note/Note"
import NewNote from "./NewNote/NewNote"
import { Spin } from 'antd';

export default function Workspace({ activeId }) {

  const notes = useContext(NotesContext);

  console.log(activeId)
  let activeNote;

  if (notes) {
    notes.forEach(note => {
      if (note.id === activeId) {
        activeNote = {
          title: note.title,
          text: note.text
        }
      }
    })
  }

  return (
    <div>
      {
        (notes) ?
          <Routes>
            <Route path={`note/${activeId}`} element={<Note activeNote={activeNote} />} />
            <Route path='note/new' element={<NewNote />} />
          </Routes>
          :
          <div className="spin">
            <Spin />
          </div>
      }
    </div>
  );
}
