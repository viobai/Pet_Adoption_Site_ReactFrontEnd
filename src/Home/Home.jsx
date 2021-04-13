import React from 'react';
import style from "./Home.module.css";
import { Link } from 'react-router-dom';
import Pets from '@material-ui/icons/Pets';

const Home = () => {
    return (
        <div className={style.homeContainer}>
            <div className={style.homeTop}>
                <h1>Rescue Project: <br/>Humane</h1>
                <div className={style.homeDesc}>
                    <p>When you adopt, you'll change a homeless animal's whole world and get a new best friend.</p>
                    <p>Seriously, what could be better than that?</p>
                </div>
                <Link className={style.startBtn} to="/petlist"><span>Get started</span> <span className={style.petIcon}><Pets/></span></Link>
            </div>
            <div className={style.homeBottom}>
                <img alt="New Pet and Family" src="https://github.com/viobai/seainfo6150-final-project-webapp/blob/master/src/images/dog-family.png?raw=true" alt="New Adopted Pet"/>
            </div>
        </div>
    )
}

export default Home
