import { Col, Row, Button } from "antd";
import React, { useContext } from 'react';
import { NotesContext } from '../../../state/NotesProvider'
import { NavLink } from "react-router-dom";
import '../../../scss/components/NoteItem.scss'
import { deleteNote } from "../../../state/db";

export default function Note() {
  
  const state = useContext(NotesContext);
  const notes = state.notes;
  const activeId = state.activeId;

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
      <Row>
        <Col span={24} className='noteItem-top'>
        <Button className="edit">
          <NavLink to='/note/edit'>Edit</NavLink>
        </Button>
        <Button className="delete" onClick={ () => {deleteNote(activeId)}}>Delete</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2>{activeNote.title}</h2>
          <p>{activeNote.text}</p>
        </Col>
      </Row>
    </div>
  );
}
