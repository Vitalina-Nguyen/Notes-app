import '../../../scss/components/Workspace/NewNote.scss'
import { Col, Row, Button, Input, notification } from "antd";
import React, { useContext } from 'react';
import { NotesContext } from "../../../state/NotesProvider";
import { addNote } from "../../../state/db";


export default function NewNote() {

  const { TextArea } = Input;
  const state = useContext(NotesContext);

  const onSaveNewNote = (e) => {
    e.preventDefault();

    const newNotePromise = addNote(state.newTitle, state.newText);
    newNotePromise.then(newNote => {
      state.setNotes([...state.notes,
      {
        id: newNote.id,
        title: newNote.title,
        text: newNote.text
      }])
    })

    state.setNewTitle('');
    state.setNewText('');
  }

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Title is empty!',
      description:
        'Title field must be filled in.',
    });
  }

  return (
    <div>
      <Row>
        <Col span={24} className='newitem-top'>
          {contextHolder}
          <Button className="save" onClick={(e) => { (state.newTitle) ? onSaveNewNote(e) : openNotification() }}>Save</Button>
        </Col>
      </Row>
      <Row>
        <Col className='newitem-bottom' span={24}>
          <Input className='newitem-title' placeholder="Title" onChange={(e) => { state.setNewTitle(e.target.value) }} value={state.newTitle} />
          <TextArea rows={4} placeholder="Text..." onChange={(e) => { state.setNewText(e.target.value) }} value={state.newText} />
        </Col>
      </Row>
    </div>
  );
}
