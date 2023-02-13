import React from 'react';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Workspace from './components/Workspace/Workspace';



function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <SidebarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/note/workspace/*" element={<Workspace />} />
            {/* <Route path="/note/all/*" element={<AllNotes />} /> */}
            {/* <Route path="/note/edit/*" element={<Workspace />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
