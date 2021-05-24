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
                <div>
                    <h1>
                        <div className={s.fullName}>{props.profile.fullName}</div>
                    </h1>
                    <div className={s.description}>
                        <div>
                            Статус: {props.profile.aboutMe}
                        </div>
                        <div>
                            Контакты: {props.profile.contacts.vk}
                        </div>
                        <div>
                            Работа: {props.profile.lookingForAJobDescription}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;