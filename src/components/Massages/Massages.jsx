import React from 'react';
import classes from './Massages.module.css';
import NamesDialogs from "./NamesDialogs/NamesDialogs";
import Dialog from "./Dialog/Dialog";

const Massages = (props) => {
    return (
        <div className={classes.wrapperForDialogs}>
            <NamesDialogs arDialogsData={props.arDialogsData} />
            <Dialog arDialogData={props.arDialogData}/>
        </div>
    );
}

export default Massages;