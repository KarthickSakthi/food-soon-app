import  { render,screen } from "@testing-library/react"

import Contact from "../Contact";

import {expect} from "@testing-library/jest-dom";
// const { default: Contact } = require("../Contact")

describe("Contact us page Test cases",()=>{

// it is an alias of test
it("Should load Contact us component",()=>{
   render(<Contact/>);
   const heading =  screen.getByRole("heading");
   //Assertion
   expect(heading).toBeInTheDocument();
})

it("Should load  button inside contact component",()=>{
   render(<Contact/>);
   const button =  screen.getByText("Submit");
   //Assertion
   expect(button).toBeInTheDocument();
})

test("Should load  input inside contact component",()=>{
   render(<Contact/>);
   const button = screen.getByPlaceholderText("name");
   //Assertion
   expect(button).toBeInTheDocument();
})

test("Should load  2 input boxes inside contact component",()=>{
    //Render
    render(<Contact/>);
    //Query
   const inputBoxes = screen.getAllByRole("textbox");
   //Assertion
   expect(inputBoxes.length).toBe(2);
});

})