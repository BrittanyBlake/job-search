
import React from "react";
import { shallow } from "enzyme";
import Typography from "@material-ui/core/Typography";
import Navbar from "../../components/Nav/Nav";

describe("Navbar", () => {

  it("should render a <Typography />", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});
