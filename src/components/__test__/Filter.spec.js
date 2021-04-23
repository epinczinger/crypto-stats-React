import React from "react";
import renderer from "react-test-renderer";
import Filter from "../Filter";

describe("The Filter", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer.create(<Filter handleFilter={Function}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
