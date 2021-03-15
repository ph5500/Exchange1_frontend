import React, { Component } from "react";
import "../App.css";

export class OrderBookLi extends Component {
  render() {
    return (
      <div className="OrderBookLi">
        <div className="orderBookLiBar">
          <li>
            <div>-</div>
            <div>25.0000</div>
            <div className="OrderBookLiPrice">0.05300</div>
          </li>
        </div>
      </div>
    );
  }
}

export default OrderBookLi;
