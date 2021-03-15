import React, { Component } from "react";
import Charts from "./components/Charts";
import Orders from "./components/Orders";
import Navbar from "./components/Navbar";
import MyOrders from "./components/MyOrders";
import BuySellSection from "./components/BuySellSection";
export class App extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <div className="ContainerMain">
          <div className="Container ContainerTop">
            <Charts />
            <Orders />
          </div>

          <div className="Container ContainerBottom">
            <MyOrders />
            <BuySellSection />
          </div>
          {/* order component will go here */}
        </div>
      </div>
    );
  }
}

export default App;
