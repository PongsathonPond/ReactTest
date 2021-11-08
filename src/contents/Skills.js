import React, { Component } from "react";
import Pro from "../compoonents/Pro";
import Pro2 from "../compoonents/Pro2";

class Skills extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic"> My Skills </h1>

        <div className="col1">
          <h2 className="subtopic1"> Language </h2>
          <Pro />
        </div>

        <div className="col2">
          <h2 className="subtopic1"> Tool&framework </h2>
          <Pro2 />
        </div>
      </div>
    );
  }
}

export default Skills;
