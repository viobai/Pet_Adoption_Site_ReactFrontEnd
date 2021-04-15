import React from "react";
import Form from "./Form.jsx";
import { fireEvent } from "@testing-library/react";

describe("Form tests", () => {
  var petList = [{
    "id": "11111",
    "name": "Apollo",
    "category": "dog",
    "gender": "male",
    "age": "1 year 3 months",
    "size": "61.2 pounds",
    "breed": "Mixed Breed",
    "description": "<p>I can't wait to settle in to my new home. I've heard all about this family dog business and I think it sounds great - walks, playing with toys, treats, belly rubs... I'm excited about all of that! If you're as ready as I am, let's meet!</p>",
    "neutering": "Neutered",
    "characteristics": ["I can be a little bit of an escape artist! I need a yard with a 6 ft wood fence.", "I need to meet any other dogs I might be living with."],
    "imageUrl": "https://raw.githubusercontent.com/viobai/seainfo6150-final-project-webapp/master/src/images/Pet/Apollo.jpeg"
}];

  it("renders correctly with no pet", () => {  
    const { container } = render(<Form pets={petList}/>);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with single pet", () => {  
      const { container } = render(<Form pets={petList}/>);
      expect(container).toMatchSnapshot();
  });

  it("renders correctly after selecting All / No Particular in Interested Animals", () => {  
    const { container, getByText } = render(<Form pets={petList}/>);
    const button = getByText("All / No Particular");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly after selecting Other in Current Residence", () => {  
    const { container, getByText } = render(<Form pets={petList}/>);
    const button = getByText("Other");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
  it("renders correctly after selecting Children or Pets in Current Household Member", () => {  
    const { container, getByText } = render(<Form pets={petList}/>);
    const button = getByText("Children or Pets");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
  it("renders correctly after selecting Phone in Best Way to Reach", () => {  
    const { container, getByText } = render(<Form pets={petList}/>);
    const button = getByText("Phone");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
  it("renders correctly after selecting Yes in Pet Experience", () => {  
    const { container, getByText } = render(<Form pets={petList}/>);
    const button = getByText("Yes");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});