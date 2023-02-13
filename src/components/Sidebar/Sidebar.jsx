import React from "react";
import { NavLink } from "react-router-dom";
import '../../scss/components/Sidebar.scss';


//Получить данные (заголовки постов) и замэпить каждый в NavLink 


export default function Sidebar( {notes} ) {

  const links = notes.map( n => {
    return (
      <li>
        <NavLink to={`/note/workspace/${n.id}`} key= {n.id}>{n.title}</NavLink>
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
