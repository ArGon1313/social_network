import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import LeftMenu from "./components/LeftMenu/left-menu";
import Main from "./components/MainContant/Main";
import {Route, Routes} from "react-router-dom";
import Massages from "./components/Massages/Massages";

function App(props) {
    return (
            <div className={'wrapper'}>
                <Header/>
                <div className={'container'}>
                    <LeftMenu/>
                        <Routes>
                            <Route path="/main" element={<Main arPostsData={props.arPostsData} />}/>
                            <Route path="/massages" element={<Massages arDialogsData={props.arDialogsData} arDialogData={props.arDialogData}/>}/>
                        </Routes>
                </div>
            </div>
    );
}

export default App;