import React from 'react';
import PetListItem from "../PetListItem/PetListItem.jsx";
import style from "./PetList.module.css";

const PetList = (props) => {
    if (!props.pets || !(props.pets.length > 0)) {
        return <div className={style.emptyListMsg}>There are currently no pets available for adoption. :)</div>;
    } else {
        return (
            <div className={style.petListContainer}>
                <ul className={style.petList}>
                    {props.pets.map((pet) => (
                    <li key={pet.id} ><PetListItem className={style.listItem} pet={pet}/></li>
                    ))}
                </ul>
            </div>
        )
    }  
}

export default PetList