import Dexie from 'dexie';
import React, { useState } from 'react';

export default function Main () {

    const db = new Dexie('DataBase');
    db.version(1).stores({
      notesArr: '++id, title, text, isActive', // Primary key and indexed props
    });

    const { notesArr } = db;
    
    db.open().catch( (err) => {
        console.log( err.stack || err );
    })
    
    const [notes, setNotes] = useState([
        {
            id: 1, 
            title: 'Title 1', 
            text: '1.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
            isActive: true
        },
        {
            id: 2, 
            title: 'Title 2', 
            text: '2.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
            isActive: false
        },
        {
            id: 3, 
            title: 'Title 3', 
            text: '3.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
            isActive: false
        }
    ])
    
    const getState = () => { return notes;};
    
    const toggleActive = (id) => {
        // console.log('ID: ', id)
        notes.forEach( n => {
            console.log('N: ', n)
            if (n.id === id) n.isActive = true;
            else n.isActive = false;
        })
        console.log(getState())
    }

    const addPost = async () => {
        await db.friends.add({
            title: "Josephine", 
            text: "5asdfgfhgjhrdtybf11"
        });
    }
    return db;
}

// const Store = {

//     notes: [
//         {
//             id: 1, 
//             title: 'Title 1', 
//             text: '1.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
//             isActive: true
//         },
//         {
//             id: 2, 
//             title: 'Title 2', 
//             text: '2.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
//             isActive: false
//         },
//         {
//             id: 3, 
//             title: 'Title 3', 
//             text: '3.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.',
//             isActive: false
//         }
//     ],


//     getState () { return this.notes;},
//     toggleActive (id) {
//         console.log('ID: ', id)

//         Store.notes.forEach( n => {
//             console.log('N: ', n)
//             if (n.id === id) n.isActive = true;
//             else n.isActive = false;
//         })
//         console.log(Store.getState())
//     }
// }

// //console.log(Store.getState())
// export default Store;