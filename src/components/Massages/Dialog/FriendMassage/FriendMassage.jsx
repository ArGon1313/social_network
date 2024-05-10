import React from 'react';
import classes from './FriendMassage.module.css';

const FriendMassage = (props) => {
    return (
            <div className={classes.friendMassage}>
                <a href={'#s'}><img
                    src={props.photo}></img></a>
                <p>{props.massage}</p>
            </div>
    );
}

export default FriendMassage;