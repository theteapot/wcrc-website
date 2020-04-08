import React, { Component } from "react";
import "./index.css";

export default class OpeningHours extends Component {
  render() {
    return (
      <div className="auckland-council-banner">
        <div className="opening-hours">
          Open Thursday-Monday, 8:00 AM to 4:00 PM
        </div>
        <div className="closing-hours">
          Closed Tuesdays, Wednesdays & Public Holidays
        </div>
      </div>
    );
  }
}
