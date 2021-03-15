import React, { Component } from "react";
import OrderBook from "./OrderBook";
import TradeHistory from "./TradeHistory";

export class Orders extends Component {
  render() {
    return (
      <div className="OrdersSection">
        <OrderBook />
        <TradeHistory />
      </div>
    );
  }
}

export default Orders;
