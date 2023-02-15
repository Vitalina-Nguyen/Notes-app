import Dexie from 'dexie';


const db = new Dexie('NotesBase');

db.version(1).stores({
  notes: '++id, title, text, isActive', 
});

export const getAllNotes = async () => {
    const data = [];
    await db.notes.each((note) => {
        data.push(note);
    });
    return data;
}

export const toggleActive = (id) => {

    
    db.notes.where({isActive: true})
        .modify({ isActive: false })
    db.notes.where({id: id})
        .modify({ isActive: true})
}

export function getStore () {

    

    const Store = {
        notes: getAllNotes(),
        addNote: async (e) => {
            e.preventDefault();
            // const noteField = document.querySelector('#inputEl');
            // console.log(taskField.value);
        
            await db.notes.add({
              // task: taskField.value,
              // completed: false
              title: 'Title 3',
              text: '3 Dfghj dffgh sdfghj sdgsfgfgfd sfsdfds',
              isActive: false
            })
            // taskField.value = ''
        }
    }
    // console.log('ALL NOTES: ', Store.allNotes);

    return Store;
  }




    // const [notes, setNotes] = useState([
    //     {
    //         id: 1, 
    //         title: 'Title 1', 
    //         text: '1.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
    //         isActive: true
    //     },
    //     {
    //         id: 2, 
    //         title: 'Title 2', 
    //         text: '2.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
    //         isActive: false
    //     },
    //     {
    //         id: 3, 
    //         title: 'Title 3', 
    //         text: '3.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
    //         isActive: false
    //     }
    // ])
    
    // const getState = () => { return notes;};
    
    // const toggleActive = (id) => {
    //     // console.log('ID: ', id)
    //     notes.forEach( n => {
    //         console.log('N: ', n)
    //         if (n.id === id) n.isActive = true;
    //         else n.isActive = false;
    //     })
    //     console.log(getState())
    // }

    // const addPost = async () => {
    //     await db.friends.add({
    //         title: "Josephine", 
    //         text: "5asdfgfhgjhrdtybf11"
    //     });
    // }
    // return db;
