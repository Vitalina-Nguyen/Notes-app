import { Col, Row, Button, Input } from "antd";
import React, { useContext } from 'react';
import { NotesContext } from '../../../state/NotesProvider'
// import '../../../scss/components/NoteItem.scss'
import { modifyNoteValue } from "../../../state/db";
import { NavLink } from "react-router-dom";

export default function NoteEdit() {

    const { TextArea } = Input;

    const state = useContext(NotesContext);
    const notes = state.notes;
    const activeId = state.activeId;

    const editNote = (e, type) => {

        const notePromise = modifyNoteValue(activeId, e.target.value, type);
        notePromise.then(newNote => {
            const newArr = notes.map(note => {
                return (note.id === newNote.id) 
                ? newNote : note;
            })
            state.setNotes(newArr);
        })
    }


    const valueObj = () => {
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
        return activeNote;
    }

    return (
        <div>
            <Row>
                <Col span={24} className='noteItem-top'>
                    <Button className="ok">
                        <NavLink to={`/note/${activeId}`}>Ok</NavLink>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Input placeholder="Title" onChange={(e) => {
                        editNote(e, 'title');
                    }} value={valueObj().title} />
                    <TextArea rows={4} placeholder="Text..." onChange={(e) => {
                        editNote(e, 'text');
                    }} value={valueObj().text} />
                </Col>
            </Row>
        </div>
    );
}
