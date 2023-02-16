import { Col, Row, Button } from "antd";
import React from "react";
import '../../../scss/components/NoteItem.scss'

export default function NoteItem({ activeNote }) {
  console.log(activeNote)
  return (
    <div>
      <Row>
        <Col span={24} className='noteItem-top'>
        <Button className="edit">Edit</Button>
        <Button className="delete">Delete</Button>
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
