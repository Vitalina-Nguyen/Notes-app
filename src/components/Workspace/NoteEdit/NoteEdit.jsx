import { Col, Row, Button, Input } from "antd";
import React, { useContext } from 'react';
import { NotesContext } from '../../../state/NotesProvider'
import '../../../scss/components/NoteItem.scss'
import { deleteNote } from "../../../state/db";
import { modifyNoteValue } from "../../../state/db";
import { NavLink } from "react-router-dom";

export default function NoteEdit() {

    const { TextArea } = Input;

    const state = useContext(NotesContext);
    const notes = state.notes;
    const activeId = state.activeId;

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

    const getTitleValue = () => {
        return notes.forEach(note => {
            if (note.id === activeId) {
                console.log(note.title)
                return note.title;
            }
        })
    }

    console.log(getTitleValue())

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
                        modifyNoteValue(activeId, e.target.value, 'title');
                        state.updateNotesData();
                    }} value= {valueObj().title}/>
                    <TextArea rows={4} placeholder="Text..." onChange={(e) => {
                        modifyNoteValue(activeId, e.target.value, 'text');
                        state.updateNotesData();
                    }} value= {valueObj().text}/>
                </Col>
            </Row>
        </div>
    );
}
