import React, { Component } from "react";

export default class About extends Component {
  render() {
      let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
          {
              resumeData.aboutme
          }
      </React.Fragment>
    );
  }
}