import React from "react";
import PetSublistLinks from "./PetSublistLinks";

describe("PetSublistLinks tests", () => {
    it("renders correctly", () => {  
        const { container } = render(<PetSublistLinks/>);
        expect(container).toMatchSnapshot();
    });
});