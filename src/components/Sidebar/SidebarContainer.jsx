import React from "react";
import Sidebar from "./Sidebar";
import StateContext from "../../state/StateContext";


export default function SidebarContainer() {
  return (
    <StateContext.Consumer>
      { 
        store => {
          const notes = store.getState().map( i => {
            return (
              {
                id: i.id,
                title: i.title
              }
            )
          })
          return <Sidebar notes= {notes} />
        }
      }
    </StateContext.Consumer>
  );
}
