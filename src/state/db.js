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
  //   e.preventDefault();
  // const noteField = document.querySelector('#inputEl');
  // console.log(taskField.value);

  await db.notes.add({
    // task: taskField.value,
    // completed: false
    title: title,
    text: text,
  });
  // taskField.value = ''
};

export const toggleActive = (id) => {};

export function getStore() {
  const Store = {
    notes: getAllNotes(),
    addNote: async (e) => {
      e.preventDefault();
      // const noteField = document.querySelector('#inputEl');
      // console.log(taskField.value);

      await db.notes.add({
        // task: taskField.value,
        // completed: false
        title: "Title 3",
        text: "3 Dfghj dffgh sdfghj sdgsfgfgfd sfsdfds",
        isActive: false,
      });
      // taskField.value = ''
    },
  };
  // console.log('ALL NOTES: ', Store.allNotes);

  return Store;
}
