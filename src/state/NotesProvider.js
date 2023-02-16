import { createContext, useEffect, useState } from "react";
import { getAllNotes } from "./db";

export const NotesContext = createContext(null);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(null);
  const [activeId, setActiveId] = useState(1);
  

  
  useEffect(() => {
    const getNotes = async () => {
      const data = await getAllNotes();
      setNotes(data);
    };
    getNotes();
  }, []);


  useEffect(() => {

  }, [activeId]);

  return (
    <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
  );
};
