import { createContext, useEffect, useState } from "react";
import { getAllNotes } from "./db";

export const NotesContext = createContext(null);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(null);
  const [activeId, setActiveId] = useState(1);

  const [state, setState] = useState({ notes, activeId, setActiveId });

  useEffect(() => {
    const getNotes = async () => {
      const data = await getAllNotes();
      setNotes(data);
    };
    getNotes();
  }, []);
  useEffect(() => {}, [notes, activeId]);

  return (
    <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
  );
};
