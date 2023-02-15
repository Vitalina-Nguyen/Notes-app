import React from "react";
import Sidebar from "./Sidebar";
import StateContext from "../../state/NotesProvider";


export default function SidebarContainer() {
  return (<div></div>
    // <StateContext.Consumer>
    //   { 
    //     db => {
    //       const notes = db.notes.map( i => {
    //         return ({
    //             id: i.id,
    //             title: i.title
    //           })
    //       })
    //       return <Sidebar notes= {notes} 
    //       // toggleActive={db.toggleActive} 
    //       />
    //     }
    //   }
    // </StateContext.Consumer>
  );
}
