import React from 'react';
import style from "./Home.module.css";
import { Link } from 'react-router-dom';
import PetListItem from ".././PetListItem/PetListItem.jsx";
import Pets from '@material-ui/icons/Pets';

const Home = (props) => {
    var petsDisplay = [];
    var randomIdx = [];
    var petsAvailable = false;
    if (props.pets && props.pets.length > 0) {
        petsAvailable = true;
        while(randomIdx.length < Math.min(3, props.pets.length)){
            var r = ~~(Math.random() * props.pets.length);
            if(randomIdx.indexOf(r) === -1) {
                randomIdx.push(r);
                petsDisplay.push(props.pets[r]);
            }
        }
    }
    

    return (
        <div className={style.homePageContainer}>
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
                <Link className={style.startBtn} to="/petlist"><span>View All Pets</span> <span className={style.petIcon}><Pets/></span></Link>
            </div>

            <div className={style.homeBottom}>
                <img alt="New Adopted Pet" src="https://github.com/viobai/seainfo6150-final-project-webapp/blob/master/src/images/dog-family.png?raw=true"/>
                {petsAvailable ? (
                    <div>
                        <h3>Some of our available pets . . .</h3>
                        <div className={style.randomPetDisplay}>
                        {petsDisplay.map((pet) => {return <PetListItem key={pet.id} pet={pet}/>})}
                        </div>
                    </div>
                ) : (
                    <div className={style.emptyListMsg}>There are currently no pets available for adoption. :)</div>
                )}           
            </div>

        </div>
    )
}

export default Home
