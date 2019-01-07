import React, { Component } from "react";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import DashBoard from "./components/dashboard/dashboard";

import Modal from "./components/modal";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div id="wrapper">
          <SideBar />

          <DashBoard />
        </div>

        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up" />
        </a>

        <Modal />
      </div>
    );
  }
}

export default App;
