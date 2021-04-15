import React from 'react';
import style from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={style.aboutUsPageContainer}>
            <img className={style.imgAtBack} alt="Pet Owner Washing His Dog" src="https://github.com/viobai/seainfo6150-final-project-webapp/blob/master/src/images/aboutUsImg.png?raw=true" />
             <div className={style.column}>
                    <div className={style.card}>
                        <h2 className={style.subTitle}>Mission Statement</h2>
                        <p>Seattle Humane promotes the human-animal bond by saving and serving pets in need, 
                            regardless of age, ability, circumstance or geography.</p>
                    </div>
                    <div className={style.card}>
                        <h2 className={style.subTitle}>Volunteer Opportunities</h2>
                        <p><span className={style.update}>
                            *** Covid-19 Updates: due to the current pandemic, we are not taking in any new 
                            volunteers. Stay safe! ***
                        </span></p>
                        <p>
                            We welcome volunteers in all ages and regardless of experience! Feel free to 
                            shoot us an email, give a call or even visit us in person to request for more 
                            details.
                        </p>
                    </div>
                    <div className={style.card}>
                        <h2 className={style.subTitle}>Financials</h2>
                        <p>
                            <span className={style.orgName}>Rescue Project: Humane</span> is nonprofit 
                            organization. We value transparency, our financial statements are made available to 
                            the public by the end of each tax season.
                        </p>
                        <p>Our tax-ID is XX-XXXXXXX and donations are tax-deductible to the extent allowed by law.</p>
                    </div>
                </div>
        </div>
               
    )
}

export default AboutUs
