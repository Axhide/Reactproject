import React from 'react'
import s from './../Friends.module.css';
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = "/friends/" + props.id;
    return <div className={s.friend + ' ' + s.active}>
        <img src='https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg' />
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default FriendsItem;