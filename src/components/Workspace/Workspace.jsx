import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NoteItem from "./NoteItem/NoteItem"

export default function Workspace({activeNote}) {
  
  return (
    <div>
      <h2>
            {activeNote.title};
        </h2>
        <p>
            {activeNote.text};
        </p>
    </div>
  );
}
