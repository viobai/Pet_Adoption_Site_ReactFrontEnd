import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <h3><a href="/">Rescue Project: Humane</a></h3>
                <nav className={style.headerNav}>
                    <div className={style.dropdown}>
                        <button className={style.btn}>Animals</button>
                        <div className={style.dropdownContent}>
                            <Link className={style.categoryLink} to="/petlist">All</Link>
                            <Link className={style.categoryLink} to="/petlist/dog">Dogs</Link>
                            <Link className={style.categoryLink} to="/petlist/cat">Cats</Link>
                            <Link className={style.categoryLink} to="/petlist/smallfurry">Small & Furry</Link>
                            <Link className={style.categoryLink} to="/petlist/bird">Birds</Link>
                            <Link className={style.categoryLink} to="/petlist/reptile">Reptiles</Link>
                        </div>
                    </div>
                    <button className={style.btn}><Link to="/adoptionform">Apply For Adoption</Link></button>
                    <button className={style.btn}><Link to="/aboutus">About Us</Link></button>
                </nav>
      </header>
    )
}

export default Header