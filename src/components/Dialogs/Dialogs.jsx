import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.addMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.addMessage}>
                    <div>
                        <textarea onChange={onNewMessageChange}
                                  value={newMessageBody}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;