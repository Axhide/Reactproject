import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (<div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/vVu7XprxSayr867oA3KQ_bigstock-Colorful-fruit-pattern-of-fres-282127069.jpg'></img>
            </div>
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;