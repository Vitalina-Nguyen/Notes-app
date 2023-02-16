import React from "react";
import "./scss/App.scss";
import { BrowserRouter } from "react-router-dom";
import Workspace from "./components/Workspace/Workspace";
import { Col, Row } from "antd";
import { NotesProvider } from "./state/NotesProvider";
import Sidebar from "./components/Sidebar/Sidebar";



function App() {

  return (
    <BrowserRouter>
      <NotesProvider>
        <Row justify="center" wrap={true}>
          <Col span={6}>
            <Sidebar />
          </Col>
          <Col span={12}>
            <Workspace />
          </Col>
        </Row >
      </NotesProvider>
    </BrowserRouter>
  );
}

export default App;
