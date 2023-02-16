import Dexie from "dexie";

const db = new Dexie("NotesBase");

db.version(1).stores({
  notes: "++id, title, text, isActive",
});


export const getAllNotes = async () => {
  const data = [];
  await db.notes.each((note) => {
    data.push(note);
  });
  return data;
};


export const addNote = async (title, text) => {

  // await db.notes.transaction('rw', db.notes, async () => {
  //   let noteId = 
    await db.notes.add({
      title: title,
      text: text,
    });
    // console.log(noteId);
  // })
  
  
};

export const deleteNote = async (id) => {

  await db.notes.delete(id);
};

export const modifyNoteValue = async (id, value, valueType) => {

  await db.notes.where({ id: id}).modify( note => { 
    (valueType === 'title') ? 
    note.title = value
    : note.text = value;
  })
};

