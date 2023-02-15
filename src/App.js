import React, { useContext, useState } from "react";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Workspace from "./components/Workspace/Workspace";
import { Button, Space } from "antd";
import { NotesProvider, NotesContext } from "./state/NotesProvider";
import Sidebar from "./components/Sidebar/Sidebar";
import { addNote } from "./state/db";

// const Asdasd = () => {

//   const notes = useContext(NotesContext);
//   return (
//     <div>
//       {
//         notes ? notes.map((note) => <div>{note.title}</div>) : 'asdasdasdasdas'
//       }
//     </div>
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <NotesProvider>
        <div className="app-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <Workspace />
          {/* </div> */}
        </div>

        {/* <Asdasd>

        </Asdasd> */}
        {/* <Space>
          <Button
            onClick={(e) => {
              e.preventDefault();
              addNote("Title 3", "3 Dfghj dffgh sdfghj sdgsfgfgfd sfsdfds");
            }}
          >
            Click
          </Button>
        </Space> */}
      </NotesProvider>

      {/* 
        {
          db => {
            let activeNote;
            db && db.notes.forEach(n => {
              console.log('All: ', n); 
              if(n.isActive) {
                activeNote = n;
              }
            });
            const path = '/note/workspace/' + activeNote.id;
            console.log(path);
            return (
              <div className="app-container">
                <SidebarContainer />
                {/* <div className="app-wrapper-content">
                      <Routes>
                        <Route path={path} element={<Workspace activeNote= {activeNote}/>} />
                      </Routes>
                </div>
              </div> */}

      {/* </StateContext.Consumer> */}
    </BrowserRouter>
  );
}

export default App;
