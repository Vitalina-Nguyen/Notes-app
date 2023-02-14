import React from "react";
import { NavLink } from "react-router-dom";
import '../../scss/components/Sidebar.scss';


//Получить данные (заголовки постов) и замэпить каждый в NavLink 


export default function Sidebar( {notes, toggleActive} ) {

  const links = notes.map( n => {
    const id = n.id;
    return (
      <li key={n.id}>
        <NavLink to={`/note/workspace/${id}`} key= {id} onClick={(e) => {
          e.preventDefault()
       
          toggleActive(id)}}> {n.title} </NavLink>
      </li>
    )
  })
  return (
    <nav>
        <ul>
            {links}
        </ul>
    </nav>
  );
}
