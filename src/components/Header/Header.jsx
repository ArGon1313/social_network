import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <div>
                <a href={'#s'}>
                    <img
                        src={'https://avatars.mds.yandex.net/i?id=ff2c259bdf52b3da033b0d847ef5267b3b0b676e-9589172-images-thumbs&n=13'}></img>
                </a>
            </div>
            <div className={classes.welcomeYou}>
                <p>Добро пожаловать в социальную сеть для котов!</p>
            </div>
        </div>
    );
}

export default Header;