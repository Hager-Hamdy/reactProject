import React, { Component } from "react";
import VideoCont from "./videoContainer/videoContainer";
import Description from "./VideoDescription/videoDescription";
import Previous from "../previous/previous";
import "./VideoRow.css";

class Videoall extends Component {
  state = {
    srcs: ["mov_bbb.mp4", "mov_aaa.mp4", "mov_ccc.mp4", "dddd.mp4"],
    show: false
  };
  clickHandlerShow = show => {
    const current = this.state.show;
    this.setState({
      show: !current,
      buttonToggle: "Hide Previous Videos"
    });
  };
  render() {
    const styleDiv = {
      marginTop: "50px"
    };
    return (
      <div className="page-content container" style={styleDiv}>
        <div className="row">
          <VideoCont />
          <Description />
        </div>
        <div className="text-center my-5">
          <button
            className="btn badge-danger text-center"
            onClick={this.clickHandlerShow}
          >
            Watched Previously
          </button>
        </div>
        {this.state.show ? (
          <div className="row">
            {this.state.srcs.map(src => (
              <Previous srcs={this.state.srcs} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Videoall;
