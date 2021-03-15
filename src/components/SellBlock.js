import React, { Component } from "react";
import InputOrderBox from "./InputOrderBox";
import MiniRadioButtonSelector from "./MiniRadioButtonSelector";
import "../App.css";
import ButtonOrderSell from "./ButtonOrderSell";

export class SellBlock extends Component {
  render() {
    return (
      <div className="BuySellBlock">
        <div className="OrderBookHeader">
          <div className="BuySellHeadingText"> Sell PLKX </div>
          <div> 999.99999</div>
        </div>
        <InputOrderBox />
        <div className="RadioButtonSelectorArea">
          <MiniRadioButtonSelector />
          <MiniRadioButtonSelector />
          <MiniRadioButtonSelector />
        </div>
        <div className="TotalAmountBar">
          You will get:
          <span> 20000 USD</span>
        </div>
        <ButtonOrderSell />
      </div>
    );
  }
}

export default SellBlock;
