// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import App from "./App";

// test("renders text: App", () => {
//   render(<App />);
//   const elm = screen.getByText(/Add new contact/i);
//   expect(elm).toBeInTheDocument();
// });

import App from "./App";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const wrapper = mount(<App />);

it("should have a add button", () => {
  const addButton = wrapper.find("button");
  const inputFirstName = wrapper.find("input[name='firstName']");
  const inputPhoneNumber = wrapper.find("input[name='phoneNumber']");
  expect(inputFirstName).toHaveLength(1);
  expect(inputPhoneNumber).toHaveLength(1);
  inputFirstName.simulate("change", { target: { value: "Ron" } });
  // inputPhoneNumber.simulate("change", { target: { value: "Weasley" } });

  expect(addButton).toHaveLength(1);

  // input.simulate("change", { target: { value: "Hello" } });
  // expect(addButton).toHaveLength(1);
  addButton.simulate("click");

  console.log(wrapper.html());
});
