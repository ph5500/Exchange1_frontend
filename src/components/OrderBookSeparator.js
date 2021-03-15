import React, { Component } from "react";
import "../App.css";
import OrderBook from "./OrderBook";
// import tradehistory component
import OrderBookLi from "./OrderBookLi";

export class OrderBookSeparator extends Component {
  render() {
    return (
      <div className="orderBookSeparator">
        <ul>
          <li>0.00%</li>
          <li>221.0943530</li>
          <li>0.00433530</li>
        </ul>
      </div>
    );
  }
}

export default OrderBookSeparator;
