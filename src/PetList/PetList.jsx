import React from 'react';
import PropTypes from "prop-types";
import PetListItem from "../PetListItem/PetListItem.jsx";
import style from "./PetList.module.css";

const PetList = (props) => {
    return (
        <div className={style.petListContainer}>
            <ul className={style.petList}>
                {props.pets.map((pet) => (
                <li><PetListItem className={style.listItem} pet={pet} key={pet.id} /></li>
                ))}
            </ul>
        </div>
    )
}

PetList.propTypes = {
    pets: PropTypes.array.isRequired
}

export default PetList
