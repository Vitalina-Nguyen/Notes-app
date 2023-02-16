import React, { useState } from "react";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workspace from "./components/Workspace/Workspace";
import { Col, Row } from "antd";
import { NotesProvider } from "./state/NotesProvider";
import Sidebar from "./components/Sidebar/Sidebar";



function App() {

  const [activeId, setActiveId] = useState(1);
  const [newNote, setNewNote] = useState({});


  return (
    <BrowserRouter>
      <NotesProvider>
        <Row justify="center" wrap={true}>
          <Col span={6}>
            <Sidebar setActiveId={setActiveId} />
          </Col>
          <Col span={12}>
            <Workspace activeId={activeId} />
          </Col>
        </Row >
      </NotesProvider>
    </BrowserRouter>
  );
}

export default App;
