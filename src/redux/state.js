import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'It\'s my second post', likes: 1},
                {id: 2, message: 'It\'s my first post', likes: 23 }
            ],
            newPostText : 'write text'
            
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
            ],
            newMessageBody : ''
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state')
    },

    addPost(postMessage) {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
    
        this._state.profilePage.postsData.push(newPost);
    
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;