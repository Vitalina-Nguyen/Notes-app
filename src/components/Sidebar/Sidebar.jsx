import React, { useContext } from 'react';
import { NotesContext } from '../../state/NotesProvider';
import { NavLink } from "react-router-dom";
import { getReqNotes } from '../../state/db'
import '../../scss/components/Sidebar.scss';
import { Input } from 'antd';


export default function Sidebar() {

  const state = useContext(NotesContext);
  const notes = state.notes;

  const { Search } = Input;
  const onSearch = (value) => {
    state.setActiveId()
    getReqNotes(value).then(array => state.setNotes(array));
  }
  const addActive = () => {
    return ({ isActive }) => (isActive ? 'active' : '')
  }


  return (
    <div className="sidebar-wrapper">
      {
        notes ?
          <nav>
            <Search
              placeholder="search"
              allowClear
              onSearch={onSearch}
              className='sidebar-search'
            />
            <ul>
              <li>
                <NavLink to='/' className={addActive()}>New note</NavLink>
              </li>
              {
                notes.map(n => {
                  const id = n.id;

                  return (
                    <li key={n.id}>
                      <NavLink to={`/note/${id}`} key={id} onClick={(e) => {
                        state.setActiveId(id)
                      }}
                      className={addActive()}> {n.title} </NavLink>
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

