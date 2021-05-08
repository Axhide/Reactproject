import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post', likesCount: 8}
            ],
            newPostText: "напиши че нить"

        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Aslanbek'},
                {id: 3, name: 'Vova'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer // publisher-subscriber
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageBody,
        }

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageBody = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageBody(body) {
        this._state.dialogsPage.newMessageBody = body;
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.profilePage, action)

        this._callSubscriber(this._state);
    }
}


window.store = store;

export default store;
