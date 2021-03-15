import React, { Component } from "react";
import "../App.css";
import ScrollingOrders from "./ScrollingOrders";
import OrderBookSeparator from "./OrderBookSeparator";

// import OrderBookLi
// import plus svg
// import minus svg
// import scrollingOrder component
// import OrderBookSeparator

export class OrderBook extends Component {
  render() {
    return (
      <div className="orderBook">
        <div className="OrderBookHeader">
          <div className="BlockTitle">Order Book</div>
          <div className="OrderBookHeaderButtons">
            <button className="OrderBookHeaderButton">
              {" "}
              <i className="fas fa-plus"></i>
            </button>
            <button className="OrderBookHeaderButton">
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="ListHeader">
          <div>My Size</div>
          <div>Size</div>
          <div>Price(BTC)</div>
        </div>
        <ul>
          <ScrollingOrders />
          <OrderBookSeparator />
          <ScrollingOrders />
        </ul>
      </div>
    );
  }
}

export default OrderBook;
