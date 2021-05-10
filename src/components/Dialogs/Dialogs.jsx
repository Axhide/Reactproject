import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(message => <Message message={message.message}/>);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.SendMessage();
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