import React from "react";
import StateContext from "../../state/StateContext";
import Workspace from './Workspace'


export default function WorkspaceContainer() {
  return (
    <StateContext.Consumer>
      { 
        store => {
          const activeNote = store.getState().forEach(n => {
            if(n.active) return n;
          });
          return <Workspace activeNote= {activeNote} />
        }
      }
    </StateContext.Consumer>
  );
}
