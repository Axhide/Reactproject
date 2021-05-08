import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (<div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/vVu7XprxSayr867oA3KQ_bigstock-Colorful-fruit-pattern-of-fres-282127069.jpg'></img>
            </div>
            <div className={s.DescriptionBlock}>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;