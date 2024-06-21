const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'



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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
        
            this._state.profilePage.postsData.push(newPost);
        
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.messagesData.push({message: body, id: 4});
            this._state.messagesPage.newMessageBody = '';
            //this._state.messagesPage.messagesData.push({message: body, id: 4});
            this._callSubscriber(this._state);
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
  
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body})

export default store;