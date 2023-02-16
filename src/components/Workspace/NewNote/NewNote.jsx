import { Col, Row, Button, Input } from "antd";
import React from "react";
// import '../../../scss/components/NoteItem.scss'

export default function NewNote() {

  const { TextArea } = Input;

  return (
    <div>
      <Row>
        <Col span={24} className='noteItem-top'>
        <Button className="save">Save</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Input placeholder="Title" />
        <TextArea rows={4} placeholder="Text..." />
        </Col>
      </Row>
    </div>
  );
}
