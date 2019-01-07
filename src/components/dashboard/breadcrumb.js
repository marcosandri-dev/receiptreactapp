import React, { Component } from "react";

class BreadCrumb extends Component {
  state = {};
  render() {
    return (
      <div className="breadcrumb-component">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Overview</li>
        </ol>
      </div>
    );
  }
}

export default BreadCrumb;
