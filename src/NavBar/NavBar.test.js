import { shallow, mount, render } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { getDOMNode } from "react-dom";
import NavBar from "./NavBar";

configure({ adapter: new Adapter() });

describe("Navbar Simple Component ", () => {
  const staticProps = {};
  const shallowRenderNavBarComponent = (
    otherProps,
    defaultProps = staticProps
  ) => {
    const props = {
      ...defaultProps,
      ...otherProps
    };
    return shallow(<NavBar {...props} />);
  };

  const deepRenderNavBarComponent = (
    otherProps,
    defaultProps = staticProps
  ) => {
    const props = {
      ...defaultProps,
      ...otherProps
    };
    return mount(<NavBar {...props} />);
  };

  describe("Renders a navbar with default styling ", () => {
    it("should render a component", () => {
      const NavBarComp = render(<NavBar />);
      console.log("Here is the html", NavBarComp);
      expect(NavBarComp).toHaveLength(1);
      expect().find(".navbar-background");
    });

    it.skip("should render a default black background", () => {
      const NavBarComp = deepRenderNavBarComponent();

      const logoContainer = NavBarComp;

      expect(logoContainer);
    });
  });
});
