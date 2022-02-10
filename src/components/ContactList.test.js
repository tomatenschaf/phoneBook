// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
import ContactList from "./ContactList";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  contacts: [{ firstName: "Ron", lastName: "Weasley", phoneNumber: "+550066" }],
  setContacts: () => {},
};

//   const component = render(<ContactList {...props} />);
const wrapper = mount(<ContactList {...props} />);
console.log(wrapper.html());

//   wrapper.find(".ContactList_delete__inNSd");
it("should have a delete button", () => {
  const deleteButton = wrapper.find("a.delete");
  expect(deleteButton).toHaveLength(1);
  deleteButton.simulate("click");
  // expect(wrapper.find("a.delete")).toHaveLength(0);
});

it("should render table header", () => {
  expect(wrapper.text().includes("First name")).toBe(true);
});
it("should render contact in table body", () => {
  expect(wrapper.text().includes("Weasley")).toBe(true);
});

//   document.querySelector("a").simulate("click");

// expect(component.getByText(/Weasley/i)).toBeInTheDocument();
