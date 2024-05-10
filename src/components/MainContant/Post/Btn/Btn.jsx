import React from 'react';
import classes from './Btn.module.css'

const Btn = () => {
    return (
        <div className={classes.newPostButton}>
            <button>Отправить</button>
        </div>
    );
}

export default Btn;