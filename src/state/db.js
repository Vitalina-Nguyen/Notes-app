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


export const getReqNotes = async (phrase) => {
  const data = [];

  await db.notes.where('title')
    .startsWithIgnoreCase(phrase)
    .each((note) => {
      data.push(note);
    });
  return data;
};


export const addNote = async (title, text) => {
  await db.notes.add({
    title: title,
    text: text,
  })

  return db.transaction('r', [db.notes], async () => {
    const note = await db.notes.get({ title: title, text: text });
    return note;
  });

};


export const deleteNote = async (id) => {
  await db.notes.where({ id: id }).delete();
};


export const modifyNoteValue = async (id, value, valueType) => {
  let editedNote;
  await db.notes.where({ id: id }).modify(note => {
    (valueType === 'title') ?
      note.title = value
      : note.text = value;
    editedNote = note;
  })
  return editedNote;
};

