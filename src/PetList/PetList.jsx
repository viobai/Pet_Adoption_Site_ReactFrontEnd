import React from 'react';
import PropTypes from "prop-types";
import PetListItem from "../PetListItem/PetListItem.jsx";
import style from "./PetList.module.css";

const PetList = (props) => {
    return (
        <div>
            <ul className={style.petList}>
                {props.pets.map((pet) => (
                <PetListItem className={style.listItem} pet={pet} key={pet.id} />
                ))}
            </ul>
        </div>
    )
}

PetList.propTypes = {
    pets: PropTypes.array.isRequired
}

export default PetList
