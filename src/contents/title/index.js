import React, { Component } from "react";
import "./index.css";

export default class Title extends Component {
  render() {
    return (
      <div className="title-block">
        <div className="title">Whangaparoa Community Recycling Centre</div>
        <div className="subtitle">
          Owned by Auckland Council, Managed by Hibiscus Coast Zero Waste
          Working together towards zero waste
        </div>
      </div>
    );
  }
}
