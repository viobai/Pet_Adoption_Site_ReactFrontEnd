import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./PetListItem.module.css";

const PetList = (props) => {
    const petLink = "/" + props.pet.id;
    const imgDesc = "a " + props.pet.category + " of breed " + props.pet.breed + " named " + props.pet.name;
    return (
            <Link className={style.link} to={petLink}>
                <div className={style.card}>
                    <div className={style.imgContainer}><img src={props.pet.imageUrl} alt={imgDesc}/></div>
                    <div className={style.shortInfo}>
                        <span className={style.name}>{props.pet.name}</span>
                        <span className={style.age}>{props.pet.age}</span>
                    </div>
                    
                </div>
            </Link>
    )
}

PetList.propTypes = {
    pet: PropTypes.object.isRequired
}

export default PetList