import React, { useState } from "react";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("DATA", data.get("foo"));
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? (
          <div>Your form entry was {submittedForm.get("myText")} and {submittedForm.get("myDropdown")}</div>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="myTextId">Input</label>
            <input type="text" name="myText" id="myTextId"/>

            <label htmlFor="myDropdownId">Input</label>
            <select name="myDropdown" id="myDropdownId">
              <option value="foo">Foo</option>
              <option value="bar">Bar</option>
              <option value="baz">Baz</option>
            </select>
            <label htmlFor="foo-yes">yes</label><input type="radio" name="foo" id="foo-yes" value="yes" />
            <label htmlFor="foo-no">no</label><input type="radio" name="foo" id="foo-no" value="no" />
            <label htmlFor="foo-maybe">maybe</label><input type="radio" name="foo" id="foo-maybe" value="maybe" />
            <input type="submit" value="Send it" />
          </form>
        )
      }
    </div>
  )
}

// optional param: pet id if accessed from pet page

export default Form
