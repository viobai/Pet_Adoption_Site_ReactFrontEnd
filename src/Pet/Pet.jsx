import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Pet.module.css";
import { FcLike  } from "react-icons/fc"

const Pet = (props) => {
    const imgDesc = "a " + props.pet.category + " of breed " + props.pet.breed + " named " + props.pet.name;
    const adoptionLink = "/adoptionform/" + props.pet.id;

    return (
        <div>
            <div className={style.petInfoContainer}>
                <div className={style.imgContainer}><img className={style.petImg} src={props.pet.imageUrl} alt={imgDesc}/></div>
                <div className={style.petInfo}>
                    <div className={style.nameAdoptBtn}>
                        <h1>{props.pet.name}</h1>
                        <Link className={style.petIcon} to={adoptionLink}>Adopt me <FcLike/></Link>
                    </div>
                    <dl className={style.petTable}>
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
                                <li className={style.character} key={desc}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

Pet.propTypes = {
    pet: PropTypes.object.isRequired
}

export default Pet
