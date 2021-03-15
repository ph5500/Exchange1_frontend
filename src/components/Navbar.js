import React, { Component } from "react";
import "../App.css";
// import SubmitButton component

// import { ReactComponent as Logo } from "../assets/logo.svg";
import NavBarItem from "./NavBarItem";
import SubmitButton from "./SubmitButton";

export class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="Left NavbarPart">
          {/* <Logo className="Logo"></Logo> */}
          {/* NavbarItem component goes here */}
        </div>
        <div className="NavbarPart Right">
          <NavBarItem />
          <NavBarItem />
          <NavBarItem />
          <NavBarItem />
          <SubmitButton text="Login"></SubmitButton>
          <SubmitButton text="Register"></SubmitButton>
        </div>
      </div>
    );
  }
}

export default Navbar;
