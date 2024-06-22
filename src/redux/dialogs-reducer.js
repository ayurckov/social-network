const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messagesData.push({message: body, id: 4});
            state.newMessageBody = '';
            return state
        default: return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body})

export default dialogsReducer