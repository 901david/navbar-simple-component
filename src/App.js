import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import NavBar from "./NavBar";
import NavigatorCircle from "./NavigatorCircle";
import SearchBarIcon from "./SearchBarIcon";
import LoaderCheck from "./LoaderCheck/LoaderCheck";

const navBarProps = {
  backgroundColor: "black",
  navHeight: "150px",
  textColor: "white"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navButtonShowing: true
    };

    this.handleSearchText = this.handleSearchText.bind(this);
  }

  handleSearchText(searchCrit) {
    if (searchCrit === "navigator") {
      this.setState({ navButtonShowing: true });
    }
  }

  render() {
    const { navButtonShowing } = this.state;
    return (
      <div>
        <LoaderCheck
          loading={true}
          backgroundColor={"blue"}
          loaderBackground="lightgrey"
          loaderBorder={"black"}
          checkColor={"white"}
        />
        {/* <NavBar {...navBarProps} /> */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <SearchBarIcon searchClickHandler={this.handleSearchText} />
        </div>
        {navButtonShowing && <NavigatorCircle />}
      </div>
    );
  }
}

export default App;
