import React, { Component } from "react";
import "../App.css";
import BuySellBlock from "./BuySellBlock";
import SellBlock from "./SellBlock";

export class BuySellSection extends Component {
  render() {
    return (
      <div>
        <div className="BuySellBlock">
          <BuySellBlock />
          <SellBlock />
        </div>
      </div>
    );
  }
}

export default BuySellSection;
