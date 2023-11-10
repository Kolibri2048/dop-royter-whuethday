import React, {useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import {S} from "./components/pages/__styles";


function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>

            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/protected'}>Protected Page</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}


export default App;
