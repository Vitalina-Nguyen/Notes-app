import React from "react";
import Sidebar from "./Sidebar";
import StateContext from "../../state/StateContext";


export default function SidebarContainer() {
  return (
    <StateContext.Consumer>
      { 
        db => {
          const notes = db.notes.map( i => {
            return ({
                id: i.id,
                title: i.title
              })
          })
          return <Sidebar notes= {notes} toggleActive={db.toggleActive} />
        }
      }
    </StateContext.Consumer>
  );
}
