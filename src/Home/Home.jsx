import React from 'react';
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.home}>
            <h1>Rescue Project: Humane</h1>
            <p>Each year, it's estimated that more than one million adoptable dogs and cats are euthanized in the United States, simply because too many pets come into shelters and too few people consider adoption when looking for a pet.</p>
            <p>When you adopt, you save a loving animal by making them part of your family and open up shelter space for another animal who might desperately need it.</p>
            <p>You'll change a homeless animal's whole world and get a new best friend out of the deal. Seriously, what could be better than that?</p>
            <a href="/petlist">Get started!</a>
        </div>
    )
}

export default Home
