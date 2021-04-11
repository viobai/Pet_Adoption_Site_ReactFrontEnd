import React from 'react';
import PropTypes from "prop-types";
import style from "./Pet.module.css";

const Pet = (props) => {
    const imgDesc = "a " + props.pet.category + " of breed " + props.pet.breed + " named " + props.pet.name;
    return (
        <div className={style.pageContainer}>
            <div className={style.imgContainer}><img src={props.pet.imageUrl} alt={imgDesc}/></div>
            <div className={style.petInfo}>
                <h2>{props.pet.name}</h2>
                <dl>
                    <dt>ID</dt>
                    <dd>{props.pet.id}</dd>
                    <dt>Age</dt>
                    <dd>{props.pet.age}</dd>
                    <dt>Breed</dt>
                    <dd>{props.pet.breed}</dd>
                    <dt>Size</dt>
                    <dd>{props.pet.size}</dd>
                    <dt>Gender</dt>
                    <dd>{props.pet.gender}</dd>
                    <dt>Neutering</dt>
                    <dd>{props.pet.neutering}</dd>
                </dl>
                <div dangerouslySetInnerHTML={{ __html: props.pet.description }} />
                <div>
                <h4>Addtional Details</h4>
                    <ul>
                        {props.pet.characteristics.map((desc) => (
                            <p>{desc}</p>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

Pet.propTypes = {
    pet: PropTypes.object.isRequired
}

export default Pet
