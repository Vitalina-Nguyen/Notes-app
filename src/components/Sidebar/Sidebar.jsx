import React, { useContext } from 'react';
import { NotesContext } from '../../state/NotesProvider';
import { NavLink } from "react-router-dom";
import '../../scss/components/Sidebar.scss';
import { toggleActive } from '../../state/db'


export default function Sidebar() {

  const notes = useContext(NotesContext);
  console.log(notes)

  return (
    <div>
      {
        notes ?
          <nav>
            <ul>
              {
                notes.map(n => {
                  const id = n.id;

                  return (
                    <li key={n.id}>
                      <NavLink to={`/note/${id}`} key={id} onClick={(e) => {
                        console.log(id)
                      }}> {n.title} </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          : 'loading...'
      }
    </div>
  )
}

