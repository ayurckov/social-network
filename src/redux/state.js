let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'It\'s my second post', likes: 1},
            {id: 2, message: 'It\'s my first post', likes: 23 }
        ]
        
    },
    messagesPage: {
        dialogsData: [
            {name: 'Sasha', id: 1},
            {name: 'Andrew', id: 2},
            {name: 'Vladimir', id: 3},
            {name: 'Roman', id: 4},
            {name: 'Gleb', id: 5}
        ],
        messagesData: [
            {message: 'Sup!', id: 1},
            {message: 'What are you doing right now?', id: 2},
            {message: 'See again', id: 3},
          ]
    }
}

export default state;