import React from 'react';
import style from "./Error.module.css";
import { Link } from 'react-router-dom';
import Pets from '@material-ui/icons/Pets';

const Error = () => {
    return (
        <div className={style.errorContainer}>
            <h1>404</h1>
            <h3>Oops, the page you are looking for does not exist.</h3>
            <p>Feel free to shoot us a email at 
                <span> <a className={style.email} href={`mailto:rescuePrjHumane-tech@placeholder.com`}>rescuePrjHumane-tech@placeholder.com</a> </span> 
                if you think something is broken.</p>
            <Link className={style.startBtn} to="/petlist"><span>Got Back to View Pets</span> <span className={style.petIcon}><Pets/></span></Link>
        </div>
    )
}

export default Error
