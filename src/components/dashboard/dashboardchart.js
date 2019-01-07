import React, { Component } from "react";

class DashBoardChart extends Component {
  state = {};
  render() {
    return (
      <div className="dashboardchart">
        <div className="card mb-3">
          <div className="card-header">
            <i className="fas fa-chart-area" />
            Area Chart Example
          </div>
          <div className="card-body">
            <canvas id="myAreaChart" width="100%" height="30" />
          </div>
          <div className="card-footer small text-muted">
            Updated yesterday at 11:59 PM
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardChart;
