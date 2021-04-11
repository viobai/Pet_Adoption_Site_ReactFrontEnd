import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = (props) => {
  const [submittedForm, setSubmittedForm] = useState();
  const [showContactTime, setContactTime] = useState(false);
  const [showResidenceDetail, setResidenceDetail] = useState(false);

  function onPhoneSelect() {
    setContactTime(!showContactTime);
  }
  function onEmailSelect() {
    setContactTime(false);
  }

  function onClickOtherRes() {
    setResidenceDetail(true);
  }
  function onClickRes() {
    setResidenceDetail(false);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (verifyInput) {
      const data = new FormData(e.target);
      setSubmittedForm(data);
    }
  };

  function verifyInput() {
    return true;
  }

  return (
    <div>
      {
        submittedForm ? (
          <div>Thank you for submitting your adoption application! We will contact you within 3 business days.</div>
        ) : (
          <form onSubmit={onSubmit}>
            <div>
              <span className="">*</span><label htmlFor="firstNameId">First Name: </label>
              <input required type="text" name="firstName" id="firstNameId"/>
            </div>
            <div>
              <span className="">*</span><label htmlFor="lastNameId">Last Name: </label>
              <input required type="text" name="lastName" id="lastNameId"/>
            </div>
            <div>
              <span className="">*</span><label htmlFor="emailId">Email: </label>
              <input required type="email" name="email" id="emailId"/>
            </div>
            <div>
              <span className="">*</span><label htmlFor="phoneId">Phone:</label>
              <input required type="tel" placeholder="123-456-7890" name="phone" id="phoneId"/>
            </div>
            <div>
              <span className="">*</span><label htmlFor="petListId">Interested Animal (you can select multiple!) : </label><br/>
              <select required multiple name="petList" id="petListId">
                <option value="allAnimals" key="allAnimalsId">All / No Particular</option>
                {props.pets.map((pet) => (
                  <option value={pet.id} key={pet.id+"id"}>{pet.name}</option>
                ))}
              </select>
            </div>
            <div>
              <span className="">*</span><label htmlFor="residenceType">What is the type of your current residence (where the pet will live)?</label><br/>
              <input name="residenceType" required type="radio" id="apartment" value="yes" onChange={onClickRes}/><label htmlFor="apartment">Apartment/Condo</label><br/>
              <input name="residenceType" type="radio" id="house" value="yes" onChange={onClickRes}/><label htmlFor="house">House</label><br/>
              <input name="residenceType" type="radio" id="otherResidence" value="yes" onChange={onClickOtherRes} /><label htmlFor="otherResidence">Other</label><br/>
              {showResidenceDetail && 
                <input name="residenceType" type="text" id="otherResidenceDetail"/>
              }
            </div>
            <div>
              <label className="livingSpaceId">What is your approximate living space in sq. ft. (where the pet will live)?</label><br/>
              <input type="number" id="livingSpaceId" placeholder="number only"/>
            </div>
            <div>
              <span className="">*</span><label htmlFor="householdMember">Please include any of the followings that is part of your current household.</label><br/>
              <input required name="householdMember" type="checkbox" id="householdMemberChildren6" value="children6" /><label htmlFor="householdMemberChildren6">Children: Age Under 6</label><br/>
              <input name="householdMember" type="checkbox" id="householdMemberChildren12" value="children12" /><label htmlFor="householdMemberChildren12">Children: Age From 6 - 12</label><br/>
              <input name="householdMember" type="checkbox" id="householdMemberDog" value="dog" /><label htmlFor="">Dog(s)</label><br/>
              <input name="householdMember" type="checkbox" id="householdMemberCat" value="cat" /><label htmlFor="">Cat(s)</label><br/>
              <input name="householdMember" type="checkbox" id="householdMemberNone" value="none" /><label htmlFor="">None of the above</label>
            </div>
            <div>
              <label htmlFor="contactWay">Which would be the best way to reach you?</label><br/>
              <input name="contactWay" type="radio" id="byPhoneId" value="phone" onChange={onPhoneSelect} /><label htmlFor="byPhoneId">phone</label><br/>
              <input name="contactWay" type="radio" id="byEmailId" value="email" onChange={onEmailSelect}/><label htmlFor="byEmailId">email</label>
            </div>
            {showContactTime && 
              <div>
                <label htmlFor="contactTimeId">When would be the best time to call you?</label><br/>
                <input type="text" name="contactTime" id="contactTimeId"/>
              </div>
            }
            <div>
              <span className="required">*</span><label htmlFor="petExperience">Do you have any past experience with the type of animal which you applying for adoption?</label><br/>
              <input required name="petExperience" type="radio" id="yesExperience" value="yes" /><label htmlFor="byPhoneId">yes</label><br/>
              <input name="petExperience" type="radio" id="noExperience" value="no" /><label htmlFor="byEmailId">no</label>
            </div>
            <input type="submit" value="Submit" />
          </form>
          
        )
      }
    </div>
  )
}

// optional param: pet id if accessed from pet page
Form.propTypes = {
  pets: PropTypes.array.isRequired
}
export default Form
