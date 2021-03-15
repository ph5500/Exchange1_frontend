import React, { Component } from "react";
import "../App.css";
import ScrollingOrders from "./ScrollingOrders";

export class TradeHistory extends Component {
  render() {
    return (
      <div className="OrderBook">
        <div className="OrderBookHeader">
          <div className="BlockTitle">Trade History</div>
          <div className="OrderBookHeaderButtons">
            <button className="OrderBookHeaderButton">This is a button</button>
            <button className="OrderBookHeaderButton">
              This is other button
            </button>
          </div>
        </div>
        <div className="ListHeader">
          <div>My Size</div>
          <div>Size</div>

          <div>Price(BTC)</div>
        </div>
        <ul>
          <ScrollingOrders></ScrollingOrders>
        </ul>
      </div>
    );
  }
}

export default TradeHistory;
