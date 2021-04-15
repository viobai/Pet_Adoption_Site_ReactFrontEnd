import React from "react";
import Header from "./Header";
import { fireEvent } from "@testing-library/react";

describe("Header tests", () => {
    it("renders correctly", () => {  
        const { container } = render(<Header/>);
        expect(container).toMatchSnapshot();
    });

    it("renders correctly after Animals button is pressed once", () => {  
        const { container, getByText } = render(<Header />);
        const button = getByText("Animals");
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
    });

    it("renders correctly after Animals button is pressed twice", () => {  
        const { container, getByText } = render(<Header />);
        const button = getByText("Animals");
        fireEvent.click(button);
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
    });
});