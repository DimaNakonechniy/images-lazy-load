import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("should render without errors", () => {
    const wrapper = shallow(<App />);
    const link = wrapper.find("a");

    expect(link.exists()).toBeTruthy();
    expect(link.text()).toEqual("Learn React");
  });
});
