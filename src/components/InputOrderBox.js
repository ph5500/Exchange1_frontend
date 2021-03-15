import React, { Component } from "react";

export class InputOrderBox extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="InputBoxBox">
            <div className="InputBoxFieldLabel"> PRICE</div>
            <input
              type="number"
              step=".0001"
              className="InputOrderBoxField"
              placeholder="0.0000"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default InputOrderBox;
