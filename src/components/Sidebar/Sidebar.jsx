import React, { useContext } from 'react';
import { NotesContext } from '../../state/NotesProvider';
import { NavLink } from "react-router-dom";
import '../../scss/components/Sidebar.scss';


export default function Sidebar({ setActiveId }) {

  const state = useContext(NotesContext);
  const notes = state.notes;

  return (
    <div className="sidebar-wrapper">
      {
        notes ?
          <nav>
            <ul>
              <li>
                <NavLink to='/note/new' className='sidebar-link'>New note</NavLink>
              </li>
              {
                notes.map(n => {
                  const id = n.id;

                  return (
                    <li key={n.id}>
                      <NavLink to={`/note/${id}`} key={id} onClick={(e) => {
                        state.setActiveId(id)
                      }}
                        className='sidebar-link'> {n.title} </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          : ''
      }

    </div>
  )
}

