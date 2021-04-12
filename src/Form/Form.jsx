import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import style from "./Form.module.css";

const Form = (props) => {
  const [submittedForm, setSubmittedForm] = useState();
  const [showContactTime, setContactTime] = useState(false);
  const [showResidenceDetail, setResidenceDetail] = useState(false);
  const [showHouseMember, setShowHouseMember] = useState(false);
  const petId = useLocation().pathname.split("/")[2];

  function onPhoneSelect() {
    setContactTime(!showContactTime);
  }
  function onEmailSelect() {
    setContactTime(false);
  }

  function onClickHouseMember() {
    setShowHouseMember(true);
  }

  function onClickNoHouseMember() {
    setShowHouseMember(false);
  }

  function onClickOtherRes() {
    setResidenceDetail(true);
  }
  function onClickRes() {
    setResidenceDetail(false);
  }

  function onClickHandler(){}

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? (
          <div className={style.submitMsgContainer}>
            <p>Thank you for submitting your adoption application! We will contact you within 3 business days.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className={style.formContainer}>
            <h2>Adoption Application</h2>
            <div className={style.inputContainer}>
              <label className={style.question} htmlFor="firstNameId"><span className={style.required}>*</span> First Name: 
                <input required type="text" name="firstName" id="firstNameId"/>
              </label>
              
            </div>
            <div className={style.inputContainer}>
              <label className={style.question} htmlFor="lastNameId"><span className={style.required}>*</span> Last Name: 
                <input required type="text" name="lastName" id="lastNameId"/>
              </label>
            </div>
            <div className={style.inputContainer}>
              <label className={style.question} htmlFor="emailId"><span className={style.required}>*</span> Email: 
                <input required type="email" placeholder="name@email.com" name="email" id="emailId"/>  
              </label>
            </div>
            <div className={style.inputContainer}>
              <label className={style.question} htmlFor="phoneId"><span className={style.required}>*</span> Phone:
                <input required type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" name="phone" id="phoneId"/>
              </label>
            </div>
            <div className={style.inputContainer}>
              <label className={style.question} className={style.question} htmlFor="petListId"><span className={style.required}>*</span> Interested Animal(s) :
                <select className={style.petSelect} required multiple name="petList" id="petListId" onClick={onClickHandler} defaultValue={[petId]}>
                  <option value="any" key="allAnimalsId">All / No Particular</option>
                  {props.pets.map((pet) => {
                    if (petId && (pet.id === petId)) {
                      return <option  value={pet.id} key={pet.id+"id"}>{pet.name}</option>
                    } else {
                      return <option value={pet.id} key={pet.id+"id"}>{pet.name}</option>
                    } 
                  })}
                </select>
              </label>
            </div>
            <div className={style.inputContainer}>
              <p className={style.question}><span className={style.required}>*</span> What is the type of your current residence (where the pet will live)?</p>
              <label htmlFor="apartment"><input name="residenceType" required type="radio" id="apartment" value="yes" onChange={onClickRes}/> Apartment/Condo</label>
              <label htmlFor="house"><input name="residenceType" type="radio" id="house" value="yes" onChange={onClickRes}/> House</label>
              <label htmlFor="otherResidence">
                <input name="residenceType" type="radio" id="otherResidence" value="yes" onChange={onClickOtherRes} /> Other 
                {showResidenceDetail && 
                <input className={style.hiddenInput} name="residenceType" type="text" id="otherResidenceDetail" placeholder="optional"/>
              }
              </label>  
            </div>
            <div className={style.inputContainer}>
              <label className={style.question} htmlFor="livingSpaceId">What is your approximate living space in sq. ft. (where the pet will live)?
                <input className={style.livingSpaceInput} type="number" min="0" id="livingSpaceId" placeholder="no decimals"/>  
              </label>
            </div>
            <div className={style.inputContainer}>
              <p className={style.question}><span className={style.required}>*</span> Please include any of the followings that is part of your current household.</p>
              <label htmlFor="householdMemberYes"><input onClick={onClickHouseMember} required name="householdMemberGeneral" type="radio" id="householdMemberYes" value="childrenOrPets" />Children or Pets</label>
              {showHouseMember && 
                <div className={style.houseMemberList}>
                  <label htmlFor="householdMemberChildren6"><input required name="householdMember" type="checkbox" id="householdMemberChildren6" value="children6" /> Children: Age Under 6</label>
                  <label htmlFor="householdMemberChildren12"><input name="householdMember" type="checkbox" id="householdMemberChildren12" value="children12" /> Children: Age From 6 - 12</label>
                  <label htmlFor="householdMemberChildren18"><input name="householdMember" type="checkbox" id="householdMemberChildren18" value="children18" /> Children: Age Above 12</label>
                  <label htmlFor="householdMemberDog"><input name="householdMember" type="checkbox" id="householdMemberDog" value="dog" /> Dog(s)</label>
                  <label htmlFor="householdMemberCat"><input name="householdMember" type="checkbox" id="householdMemberCat" value="cat" /> Cat(s)</label>
                </div>
                
              }
              <label htmlFor="householdMemberNone"><input onClick={onClickNoHouseMember} name="householdMemberGeneral" type="radio" id="householdMemberNone" value="none" />None of the above</label>
            </div>              
            <div className={style.inputContainer}>
              <p className={style.question}>Which would be the best way to reach you?</p>
              <label htmlFor="byPhoneId">
                <input name="contactWay" type="radio" id="byPhoneId" value="phone" onChange={onPhoneSelect} /> phone 
                {showContactTime && 
                    <label className={style.hiddenInput} htmlFor="contactTimeId">Best time to call you?<input type="text" name="contactTime" id="contactTimeId" placeholder="optional"/></label>
                }
              </label>
              <label htmlFor="byEmailId"><input name="contactWay" type="radio" id="byEmailId" value="email" onChange={onEmailSelect}/> email</label>
            </div>
            
            <div className={style.inputContainer}>
              <p className={style.question}><span className={style.required}>*</span> Do you have any experience with the type of animal which you applying for adoption?</p>
              <label htmlFor="yesExperience"><input required name="petExperience" type="radio" id="yesExperience" value="yes" /> yes</label>
              <label htmlFor="noExperience"><input name="petExperience" type="radio" id="noExperience" value="no" /> no</label>
            </div>
            <br/>
            <input className={style.submitBtn} type="submit" value="Submit" />
          </form>
          
        )
      }
    </div>
  )
}

Form.propTypes = {
  pets: PropTypes.array.isRequired
}
export default Form
