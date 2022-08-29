import React, { Component } from "react";
import Header from "./header";
import Calculator from "./calculator";
import './stylesheet.css';

class Main extends Component {
  state = {
    currentTabIndex: 0,
  };

  handleTabIndexChanged = (index) => {
    this.setState({ currentTabIndex: index });
  };

  render() {
    return (
      <div className="container">
        <Header
          initialIndex={this.state.currentTabIndex}
          onTabIndexChanged={this.handleTabIndexChanged}
        />
        <div className="calc-wrapper">
          <Calculator index={this.state.currentTabIndex}/>
        </div>
        <div className="footer"> <span style={{fontWeight : 'bold'}}> Simple Calculator</span> <small>Created by Lioncio Morcilla</small> </div>
      </div>
    );
  }
}

export default Main;
