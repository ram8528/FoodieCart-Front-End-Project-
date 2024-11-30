import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
// All this is Unit Testing 
// for grouping test cases using describe
describe("Contact Us Page Test Case ", () => {  // describe for grouping test cases . multiple describe can be there
  test("Should load contact us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button"); // run by role
    // const button = screen.getByText("Submit");          // run by text
    expect(button).toBeInTheDocument();
  });
});

it("Should load input name inside Contact Component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name"); // run by role
  // const button = screen.getByText("Submit");          // run by text
  expect(inputName).toBeInTheDocument();
}); // Either use test/it

test("Should load 2 input boxes on the Contact Component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");
  // assertion
  // console.log(inputBoxes); // this is basically virtual dom react element
  // console.log(inputBoxes.length); //2
  expect(inputBoxes.length).toBe(2);
});
