import React from 'react';
import classes from './MyMassage.module.css';

const MyMassage = (props) => {
    return (
        <div className={classes.Dialog}>
            <div className={classes.myMassage}>
                <p>{props.massage}</p>
            </div>
        </div>
    );
}

export default MyMassage;