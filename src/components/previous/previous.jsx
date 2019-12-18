import React, { Component } from "react";
import "./previous.css";

class Previous extends Component {
  render() {
    return (
      <div className=" videos-prev col-lg-3">
        <video height="200" width="100%" controls>
          <source src={this.props.srcs} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
}

export default Previous;
