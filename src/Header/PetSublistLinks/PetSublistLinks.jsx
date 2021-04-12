import React from 'react';
import { Link } from 'react-router-dom';
import style from "./PetSublistLinks.module.css";

const PetSublistLinks = () => {

    return (
        <div className={style.dropContainer}>
            <Link className={style.categoryLink} to="/petlist">All</Link>
            <Link className={style.categoryLink} to="/petlist/dog">Dogs</Link>
            <Link className={style.categoryLink} to="/petlist/cat">Cats</Link>
            <Link className={style.categoryLink} to="/petlist/smallfurry">Small & Furry</Link>
            <Link className={style.categoryLink} to="/petlist/bird">Birds</Link>
            <Link className={style.categoryLink} to="/petlist/reptile">Reptiles</Link>
        </div>
            
    )
}
export default PetSublistLinks