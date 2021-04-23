import React from "react";
import renderer from "react-test-renderer";
import AboutUs from "../AboutUs";

describe("The AboutUs component", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer.create(<AboutUs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
