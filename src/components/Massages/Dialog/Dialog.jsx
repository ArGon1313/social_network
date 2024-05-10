import React from 'react';
import classes from './Dialog.module.css';
import FriendMassage from "./FriendMassage/FriendMassage";
import MyMassage from "./MyMassage/MyMassage";

const Dialog = (props) => {


    return (
        <div className={classes.Dialog}>
            {props.arDialogData.map(massage => <FriendMassage id={massage.id} massage={massage.massage} photo={massage.photo}/>)}
            {/*{props.arDialogData.map(massage => <MyMassage id={massage.id} massage={massage.massage} photo={massage.photo}/>)}*/}
        </div>
    );
}

export default Dialog;