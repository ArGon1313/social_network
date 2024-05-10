import React from 'react';
import classes from './NameSpeaker.module.css';
import {Link} from 'react-router-dom';

const NameSpeaker = (props) => {
    let path = '/massages/' + props.id;
    return (
        <div className={classes.nameSpeaker}>
            <div>
                <Link to={path}><img
                    src={props.img}></img></Link>
            </div>
            <div className={classes.forA}>
                <Link to={path}>{props.name}</Link>
            </div>
        </div>
    );
}

export default NameSpeaker;