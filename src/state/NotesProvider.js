import { createContext, useEffect, useState } from "react";
import { getAllNotes } from "./db";

export const NotesContext = createContext(null);

export const NotesProvider = ({ children }) => {

  const [notes, setNotes] = useState(null);
  const [activeId, setActiveId] = useState();
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

const getNotes = async () => {
      const data = await getAllNotes();
      setNotes(data);
    };

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    console.log( 'Changed notes: ', notes);
  }, [notes]);

  const updateNotesData = () => {
    getNotes();
  }

  const value = {
    notes,
    setNotes,
    activeId,
    setActiveId,
    newTitle,
    setNewTitle,
    newText,
    setNewText,
    updateNotesData
  }


  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
