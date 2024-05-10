import React from 'react';
import classes from './News.module.css'
import Btn from "./../Post/Btn/Btn";
import NewMsg from "./../Post/NewMsg/NewMsg";

const News = (props) => {
    return (
            <div>
                <div className={classes.myPostContainer}>
                    <div className={classes.myPost}>
                        <h3>Моя почта</h3>
                    </div>
                    <div className={classes.newPost}>
                        <input placeholder={'Создать новость'}></input>
                        <Btn/>
                    </div>
                </div>
                {props.arPostsData.map(news => <NewMsg id={news.id} massage={news.massage} LikesValue={news.LikesValue} />)}
            </div>
    );
}

export default News;