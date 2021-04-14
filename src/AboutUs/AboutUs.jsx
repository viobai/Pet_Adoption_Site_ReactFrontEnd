import React from 'react';
import style from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={style.aboutUsContainer}>
             <div className={style.column}>
                    <div className={style.card}>
                        <div className={style.container}>
                            <h2 className={style.title}>Mission Statement</h2>
                            <p>Seattle Humane promotes the human-animal bond by saving and serving pets in need, 
                                regardless of age, ability, circumstance or geography.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.container}>
                            <h2 className={style.title}>Volunteer</h2>
                            <p><span className="">
                                *** Covid-19 Updates: due to the current pandemic, we are not taking in any new 
                                volunteers. Stay safe! ***
                            </span></p>
                            <p>
                                We welcome volunteers in all ages and regardless of experience! Feel free to 
                                shoot us an email, give a call or even visit us in person to request for more 
                                details.
                            </p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.container}>
                            <h2 className={style.title}>Financials</h2>
                            <p>
                                <span className={style.orgName}>Rescue Project: Humane</span> is nonprofit 
                                organization. We value transparency, our financial statements are made available to 
                                the public by the end of each tax season.
                            </p>
                            <p>Our tax-ID is XX-XXXXXXX and donations are tax-deductible to the extent allowed by law.</p>
                        </div>
                    </div>
                </div>

        </div>
               
    )
}

export default AboutUs
