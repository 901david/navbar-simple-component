import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import NavigatorCircle from "./NavigatorCircle";
import SearchBarIcon from "./SearchBarIcon";

const navBarProps = {
  backgroundColor: "black",
  navHeight: "150px",
  textColor: "white"
};

const App = props => (
  <div>
    {/* <NavBar {...navBarProps} /> */}
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "50px"
      }}
    >
      <SearchBarIcon />
    </div>
    <NavigatorCircle />
  </div>
);

export default App;
