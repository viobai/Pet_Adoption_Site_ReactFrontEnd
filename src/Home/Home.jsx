import React from 'react';
import style from "./Home.module.css";
import { Link } from 'react-router-dom';
import Pets from '@material-ui/icons/Pets';

const Home = () => {
    return (
        <div className={style.home}>
            <img src="images/dog-family.png" alt="New Adopted Pet"/>
            <h1>Rescue Project: <br/>Humane</h1>
            <div className={style.homeDesc}>
                <p>Each year, it's estimated that more than one million adoptable dogs and cats are euthanized in the United States.</p>
                <p>When you adopt, you save a loving animal by making them part of your family and open up shelter space for another animal who might desperately need it.</p>
                <p>You'll change a homeless animal's whole world and get a new best friend. Seriously, what could be better than that?</p>
            </div>
            <Link className={style.startBtn} to="/petlist"><span>Get started</span> <span className={style.petIcon}><Pets/></span></Link>
        </div>
    )
}

export default Home
