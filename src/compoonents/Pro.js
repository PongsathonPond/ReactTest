import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Pro extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          <li id="li1" className="html">
            HTML{" "}
          </li>
          <li id="li1" className="css">
            CSS{" "}
          </li>
          <li id="li1" className="js">
            Java script{" "}
          </li>
          <li id="li1" className="react">
            Python{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Pro;
