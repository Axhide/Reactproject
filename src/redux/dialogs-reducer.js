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
        case SEND_MESSAGE: {
            let sendMessage = {
                id: 4,
                message: state.newMessageBody
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(sendMessage);
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;