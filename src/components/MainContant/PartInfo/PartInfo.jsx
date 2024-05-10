import React from 'react';
import classes from './PartInfo.module.css'

const PartInfo = (props) => {
    return (
        <div className={classes.wrapperPart}>
            <div className={classes.mainPart}>
                <img
                    src={props.photo}></img>
            </div>
            <div className={classes.mainContentForPartPhoto}>
                <h2>{props.name}</h2>
                <p> Возраст: {props.age}</p>
                <p> Пол: {props.sex}</p>
                <p> Вес: {props.weight} кг</p>
                <p> Увлечения: {props.hobby}</p>
            </div>
        </div>
    );
}

export default PartInfo;