import React from 'react'
import FriendsItem from "./FriendsItem/FriendsItem";
import s from './Friends.module.css';

const Friends = (props) => {
    let state = props.store.getState().sideBar;

    let friends =
        state.friends.map(d => <FriendsItem name={d.name} id={d.id}/>)

    return (
        <div className={s.friendsItem}>
            <div>{friends}</div>
        </div>
    )
}

export default Friends