import React, { Component } from "react";
import InputOrderBox from "./InputOrderBox";
import ButtonOrderSubmit from "./ButtonOrderSubmit";
import MiniRadioButtonSelector from "./MiniRadioButtonSelector";
import "../App.css";

export class BuySellBlock extends Component {
  render() {
    return (
      <div className="BuySellBlock">
        <div className="OrderBookHeader">
          <div className="BuySellHeadingText"> Buy PLKX </div>
          <div>999.99999</div>
        </div>
        <InputOrderBox />
        <div className="RadioButtonSelectorArea">
          <MiniRadioButtonSelector />
          <MiniRadioButtonSelector />
          <MiniRadioButtonSelector />
        </div>
        <div className="TotalAmountBar">
          You will get:
          <span>200 ETH</span>
        </div>
        <ButtonOrderSubmit />
      </div>
    );
  }
}

export default BuySellBlock;
