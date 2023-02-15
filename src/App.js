import React, { useContext, useState } from 'react';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Workspace from './components/Workspace/Workspace';
import { Button, Space } from 'antd';
import { NotesProvider, NotesContext } from './state/NotesProvider';
import Sidebar from './components/Sidebar/Sidebar';

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
          <div className='sidebar'>
            <Sidebar />
          </div>
          <Workspace />
          {/* </div> */}
        </div>


        {/* <Asdasd>

        </Asdasd> */}

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
