import React, { useState }  from 'react';
import PetSublistLinks from './PetSublistLinks/PetSublistLinks.jsx';
import style from "./Header.module.css";
import { Link } from 'react-router-dom';
import { SiFurrynetwork } from "react-icons/si";

const Header = () => {
    const [hamburgerShowInfo, setShowHam] = useState(false);
    const [hamburgerAnimalShowInfo, setShowHamAni] = useState(false);
    const [animalShowInfo, setShowAni] = useState(false);
    const onClickHam = () => {
        setShowHam(!hamburgerShowInfo);
    };
    const onClickHamAni = () => {
        setShowHamAni(!hamburgerAnimalShowInfo);
    };
    const onClickAni = () => {
        setShowAni(!animalShowInfo);
    };

    return (
        <header>
            <a href="/"><h3><SiFurrynetwork/> Rescue Project: Humane</h3></a>
            <div className={style.navBarContainer}>
                <div className={style.navBarColContainer}>
                    <div><button onClick={onClickHam} className={style.dropBtnHam}>三</button></div>
                    {hamburgerShowInfo && 
                        <div className={style.navBarCol}>
                            <div className={style.dropdown}>
                                <button onClick={onClickHamAni} className={style.dropBtnInHam}>Animals</button>
                                {hamburgerAnimalShowInfo && <div className={style.sublistHam}><PetSublistLinks/></div>}
                            </div>
                            <Link className={style.colBtn}to="/adoptionform" >Apply For Adoption</Link>
                            <Link className={style.colBtn} to="/aboutus" >About Us</Link>
                        </div>
                    }
                </div>
            </div>
            <div className={style.navBarContainer}>
                <div className={style.navBarRow}>
                    <div>
                        <button onClick={onClickAni} className={style.dropBtn}>Animals</button>
                        {animalShowInfo && <PetSublistLinks/>}
                    </div>
                    <Link className={style.rowBtn} to="/adoptionform" >Apply For Adoption</Link>
                    <Link to="/aboutus" className={style.rowBtn}>About Us</Link>
                </div>
            </div>
      </header>
    )
}

export default Header