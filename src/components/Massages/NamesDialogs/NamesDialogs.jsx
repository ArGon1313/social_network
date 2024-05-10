import React from 'react';
import classes from './NamesDialogs.module.css';
import NameSpeaker from "./NameSpeaker/NameSpeaker";


const NamesDialogs = (props) => {
    return (
        <div className={classes.nameDialogs}>
            {props.arDialogsData.map(dialog => <NameSpeaker name={dialog.name} id={dialog.id} img={dialog.img}/>)}
        </div>
    );
}

export default NamesDialogs;