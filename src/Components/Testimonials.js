import React, { Component } from "react";
import resumeData from "./ResumeData";

export default class Testimonial extends Component {
  render() {
    return (
      <div>
        {resumeData.testimonials &&
          resumeData.testimonials.map((item) => {
            return (
              <li>
                <blockquote>
                  <p>{item.description}</p>
                  <cite>{item.name}</cite>
                </blockquote>
              </li>
            );
          })}
      </div>
    );
  }
}
