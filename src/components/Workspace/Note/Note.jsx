import { Col, Row, Button, Modal } from "antd";
import React, { useContext, useState } from 'react';
import { NotesContext } from '../../../state/NotesProvider'
import { NavLink } from "react-router-dom";
import '../../../scss/components/Workspace/Note.scss'
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


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleOk = () => {
    setIsModalOpen(false);

    const noteToDelete = activeId;
    state.setActiveId()

    deleteNote(noteToDelete);
    let newArr = [];
    notes.forEach(note => {
      if (note.id !== activeId) {
        newArr.push(note);
      }
    })
    state.setNotes(newArr);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (
    <div>
      <Row>
        <Col span={24} className='noteItem-top'>
          <Button className="edit">
            <NavLink to='/note/edit'>Edit</NavLink>
          </Button>
          <Button className="delete" onClick={showModal}>Delete</Button>
          <Modal title="Do you want to delete the note?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          </Modal>
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
