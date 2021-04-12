import React from 'react';
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <div>
                <h3>Contact Us</h3>
                <p>Phone: (XXX) XXX-XXXX</p>
                <p>Email: <a className={style.email} href={`mailto:rescuePrjHumane@placeholder.com`}>rescuePrjHumane@placeholder.com</a></p>
                <p>#XXX XX-th Ave NE, Seattle, WA 98105</p>
            </div>
            <div>
                <h3>Adoption Hours</h3>
                <p>Mon - Thu: 12 a.m. - 6 p.m.</p>
                <p>Fri - Sun: 10 a.m. - 8 p.m.</p>
            </div>
        </footer>
    )
}

export default Footer
