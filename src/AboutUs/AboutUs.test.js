import React from "react";
import AboutUs from "./AboutUs";

describe("AboutUs tests", () => {
    it("renders correctly", () => {  
        const { container } = render(<AboutUs/>);
        expect(container).toMatchSnapshot();
    });
});