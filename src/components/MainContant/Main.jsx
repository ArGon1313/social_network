import React from 'react';
import classes from './Main-Content.module.css'
import PartInfo from "./PartInfo/PartInfo.jsx";
import News from "./News/News.jsx";

const Main = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.mainPhoto}>
                <img src={'https://i.imgur.com/qNNITv6.jpeg?fb'}></img>
            </div>
            <PartInfo name={'Лелик'} age={20} hobby={'Cпать жрать.'} weight={70} photo={'https://img.freepik.com/free-icon/pussy-cat-cartoon-outline-variant_318-45903.jpg?size=626&ext=jpg'} />
            <News arPostsData={props.arPostsData} />
        </div>
    );
}

export default Main;