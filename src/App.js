import React, { useState } from 'react';
import Dexie from 'dexie';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Workspace from './components/Workspace/Workspace';
  import StateContext from "./state/StateContext";
import { useLiveQuery } from "dexie-react-hooks";
import { Button, Space } from 'antd';
// import db from './state/db';

const db = new Dexie('NotesBase');

db.version(1).stores({
  notes: '++id, title, text, isActive', // Primary key and indexed props
});

export const { notes } = db;


function App() {

  const allItems = useLiveQuery( () => notes.toArray(), []);
  console.log(allItems)

  const addNote = async (e) => {
    e.preventDefault();
    // const noteField = document.querySelector('#inputEl');
    // console.log(taskField.value);

    await notes.add({
      // task: taskField.value,
      // completed: false
      title: 'New Title',
      text: 'Dfghj dffgh sdfghj',
      isActive: false
    })

    // taskField.value = ''
  }
  return (
    
      <BrowserRouter>
        <div className="app-container">
          {/* <SidebarContainer /> */}
          <Space wrap>
            <Button type="primary" onClick={addNote}>Primary Button</Button>
          </Space>
          <div className="app-wrapper-content">
          
              {/* <StateContext.Consumer> */}

                {/* { 
                  db => {
                    let activeNote;
                    db.notes.forEach(n => {
                      if(n.isActive) {
                        activeNote = n;
                        console.log(n);
                      }
                    });
                    const path = '/note/workspace/' + activeNote.id;
                    return (
                      <Routes>
                        <Route path={path} element={<Workspace activeNote= {activeNote}/>} />
                      </Routes>
                    )
                  }
                } */}
              {/* <WorkspaceContainer /> */}
              
              {/* <Route path="/note/workspace/*" element={<WorkspaceContainer />} />
              <Route path="/note/all/*" element={<AllNotes />} /> 
              <Route path="/note/edit/*" element={<Workspace />} /> */}
            
            {/* </StateContext.Consumer> */}

          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;


// export function AddNotes() {
//   const [notes, setNotes] = useState([
//     {
//       id: 1, 
//       title: 'Title 1', 
//       text: '1.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
//       isActive: true
//     },
//     // {
//     //     id: 2, 
//     //     title: 'Title 2', 
//     //     text: '2.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
//     //     isActive: false
//     // },
//     // {
//     //     id: 3, 
//     //     title: 'Title 3', 
//     //     text: '3.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
//     //     isActive: false
//     // }
// ])

//   async function addNotes() {
//     try {

//       // Add the new note!
//       const id = await db.notes.add({
//         title: notes[0].title,
//         text: notes[0].text
//       });
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
