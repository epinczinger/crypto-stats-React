import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

describe("The Footer", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
