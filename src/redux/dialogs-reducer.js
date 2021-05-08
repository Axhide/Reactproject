const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'a ny da'},
        {id: 3, message: 'idi nahui'}
    ],
    dialogs: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Aslanbek'},
        {id: 3, name: 'Vova'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Ninka'},
        {id: 6, name: 'Snajper'}
    ],
    newMessageBody: "sho"
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 4, message: body});
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;