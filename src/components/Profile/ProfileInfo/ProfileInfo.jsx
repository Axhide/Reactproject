import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import profilePhoto from '../../../assets/images/blank-profile-picture-973460_640-300x300-1.png';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (<div>
            <div>
               {/*<img src='https://p.bigstockphoto.com/vVu7XprxSayr867oA3KQ_bigstock-Colorful-fruit-pattern-of-fres-282127069.jpg'></img>*/}
            </div>
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large != null ?props.profile.photos.large: profilePhoto }/>
                <div>
                    <h1>
                        <div className={s.fullName}>{props.profile.fullName}</div>
                    </h1>
                    <ProfileStatus status={'Privet'}/>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;