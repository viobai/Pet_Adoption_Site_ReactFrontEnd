import React from 'react';
import style from "./Home.module.css";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import PetListItem from ".././PetListItem/PetListItem.jsx";
import Pets from '@material-ui/icons/Pets';

const Home = (props) => {
    var petsDisplay = [];
    var randomIdx = [];
    while(randomIdx.length < 3){
        var r = ~~(Math.random() * props.pets.length);
        if(randomIdx.indexOf(r) === -1) {
            randomIdx.push(r);
            petsDisplay.push(props.pets[r]);
        }
    }
    

    return (
        <div className={style.homeContainer}>
            <div className={style.homeTop}>
                
                <div className={style.homeDesc}>
                    <p>When you adopt, you'll change a homeless animal's whole world and get a new best friend.</p>
                    <p>Seriously, what could be better than that?</p>
                </div>
                <div className={style.homeTitleImgWrap}>
                    <h1>Rescue Project: <br/>Humane</h1>
                    <div className={style.homeTopImgWrap}>
                        <img className={style.homeTopImg} alt="People Holding Pets" src="https://github.com/viobai/seainfo6150-final-project-webapp/blob/master/src/images/homeTopImg.png?raw=true"/>
                    </div>
                </div>
                    
                <Link className={style.startBtn} to="/petlist"><span>Get started</span> <span className={style.petIcon}><Pets/></span></Link>
            </div>
            <div className={style.homeBottom}>
                <img alt="New Pet and Family" src="https://github.com/viobai/seainfo6150-final-project-webapp/blob/master/src/images/dog-family.png?raw=true" alt="New Adopted Pet"/>
                <h3>Some of our available pets . . .</h3>
                <div className={style.randomPetDisplay} id="randomPetDisplay">
                    <PetListItem pet={petsDisplay[0]}/>
                    <PetListItem pet={petsDisplay[1]}/>
                    <PetListItem pet={petsDisplay[2]}/>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {
    pets: PropTypes.object.isRequired
}

export default Home
