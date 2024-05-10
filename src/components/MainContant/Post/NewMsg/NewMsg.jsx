import React from 'react';
import classes from './NewMsg.module.css'

const NewMsg = (props) => {
    return (
        <div className={classes.massage}>
            <img src={'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-84.jpg'}></img>
            <p>{props.massage}</p>
            <div className={classes.likeVal}>
                <p>like:{props.LikesValue}</p>
            </div>
        </div>
    );
}

export default NewMsg;