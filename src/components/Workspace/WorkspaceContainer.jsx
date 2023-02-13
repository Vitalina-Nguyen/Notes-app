import React from "react";
import StateContext from "../../state/StateContext";


export default function WorkspaceContainer() {
  return (
    <StateContext.Consumer>
      { 
        store => {
          return <Workspace notes= {store.getState()} />
        }
      }
    </StateContext.Consumer>
  );
}
