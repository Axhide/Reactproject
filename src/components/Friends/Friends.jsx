import React from 'react'
import FriendsItem from "./FriendsItem/FriendsItem";
import s from './Friends.module.css';

const Friends = (props) => {

    let friends =
        props.state.friends.map(d => <FriendsItem name={d.name} id={d.id}/>)

    return (
        <div className={s.friendsItem}>
            <div>{friends}</div>
        </div>
    )
}

export default Friends