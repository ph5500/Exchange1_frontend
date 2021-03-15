import React, { Component } from "react";
import "../App.css";

export class ButtonOrderSubmit extends Component {
  render() {
    return (
      <form>
        <button className="SubmitOrderButton">Buy</button>
      </form>
    );
  }
}

export default ButtonOrderSubmit;
