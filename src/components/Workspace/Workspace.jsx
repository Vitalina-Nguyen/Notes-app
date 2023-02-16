import '../../scss/components/Workspace.scss'
import React, { useContext } from 'react';
import { NotesContext } from '../../state/NotesProvider';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Note from "./Note/Note"
import NewNote from "./NewNote/NewNote"
import NoteEdit from "./NoteEdit/NoteEdit"
import { Spin } from 'antd';

export default function Workspace() {

  const state = useContext(NotesContext);
  const notes = state.notes;
  const activeId = state.activeId;



  return (
    <div>
      {
        (notes) ?
          <Routes>
            <Route path={`note/${activeId}`} element={<Note />} />
            <Route path='note/new' element={<NewNote />} />
            <Route path='note/edit' element={<NoteEdit />} />
          </Routes>
          :
          <div className="spin">
            <Spin />
          </div>
      }
    </div>
  );
}
