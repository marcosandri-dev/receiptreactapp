import React, { Component } from "react";
import Footer from "./footer";
import BreadCrumb from "./breadcrumb";
import HotTopics from "./hottopics";
import DashBoardChart from "./dashboardchart";
import DashBoardTable from "./dashboardtable";

class DashBoard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboardcomponent">
        <div id="content-wrapper">
          <div class="container-fluid">
            <BreadCrumb />

            <HotTopics />
            <DashBoardChart />

            <DashBoardTable />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default DashBoard;
