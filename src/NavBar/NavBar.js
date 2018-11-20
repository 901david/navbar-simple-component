import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Row from "../Row";
import Column from "../Column";

const NavBarColumn = styled(Column)`
  width: 100%;
  background: ${props => props.backgroundColor};
  height: ${props => props.navHeight};
  color: ${props => props.textColor};
`;

const LogoContainer = styled.div`
  background-image: url("https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-round.png");
  grid-column: 8 span 2;
  height: 67%;
  width: 7%;
  background-size: cover;
`;
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuSelectedState: "",
      menuItems: []
    };
  }

  render() {
    const { primaryLogo, textColor, backgroundColor, navHeight } = this.props;
    return (
      <Row>
        <NavBarColumn
          className={`navbar-background`}
          textColor={textColor}
          backgroundColor={backgroundColor}
          navHeight={navHeight}
          startCol={1}
          span={12}
        >
          {primaryLogo && (
            <LogoContainer className={`logo-container`}>
              {primaryLogo}
            </LogoContainer>
          )}
        </NavBarColumn>
      </Row>
    );
  }
}

NavBar.propTypes = {
  backgroundColor: PropTypes.string,
  navHeight: PropTypes.string,
  textColor: PropTypes.string,
  primaryLogo: PropTypes.element
};

NavBar.defaultProps = {
  backgroundColor: "black",
  navHeight: "150px",
  textColor: "white"
};

export default NavBar;
