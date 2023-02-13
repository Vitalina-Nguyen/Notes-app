const Store = {
    
    notes: [
        {
            id: 1, 
            title: 'Title 1', 
            text: '1.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.'
        },
        {
            id: 2, 
            title: 'Title 2', 
            text: '2.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.'
        },
        {
            id: 3, 
            title: 'Title 3', 
            text: '3.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of a Latin professor at Hampden-Sydney College in Virginia.'
        }
    ],

    getState: function () { return this.notes;}
}

console.log(Store.getState())
export default Store;