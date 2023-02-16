import { Col, Row, Button, Input } from "antd";
import React, { useContext } from 'react';
import { NotesContext } from "../../../state/NotesProvider";
import { addNote } from "../../../state/db";

// import '../../../scss/components/NoteItem.scss'

export default function NewNote() {

  const { TextArea } = Input;

  const state = useContext(NotesContext);

  // const onChange = (e) => {
  //   e.target.value
  // }
  console.log(state.newTitle)

  return (
    <div>
      <Row>
        <Col span={24} className='noteItem-top'>
        <Button className="save" onClick={ (e) => {
          e.preventDefault();
          addNote(state.newTitle, state.newText);
          state.updateNotesData();
          state.setNewTitle('');
          state.setNewText('');
        }}>Save</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Input placeholder="Title" onChange={(e) =>{ state.setNewTitle(e.target.value)}} value={state.newTitle}/>
        <TextArea rows={4} placeholder="Text..." onChange={(e) =>{ state.setNewText(e.target.value)}} value={state.newText}/>
        </Col>
      </Row>
    </div>
  );
}
