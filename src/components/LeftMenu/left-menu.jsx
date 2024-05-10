import React from 'react';
import classes from "./LeftMenu.module.css";
import {Link} from "react-router-dom";

const LeftMenu = () => {
    return(
            <div className={classes.leftMenu}>
                <Link to={'/main'}>Моя страница</Link>
                <Link to={'/friends'}>Друзья</Link>
                <Link to={'/photo'}>Фотографии</Link>
                <Link to={'/massages'}>Сообщения</Link>
                <Link to={'/settings'}>Настройки</Link>
            </div>
    );
}

export default LeftMenu;