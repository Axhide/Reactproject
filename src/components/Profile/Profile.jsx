import React from 'react';
import MyPosts from './My Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import Post from "./My Posts/Post/Post";

const Profile = (props) => {
    return (<div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}/>
  </div>
  );
}

export default Profile;