import React, { Component } from "react";
import TabItem from "./tabItem";

/**
 * Properties :
 *  - initialIndex [int] (optional): Initial Index of the tab
 *  - onTabIndexChanged [ function(index) ] (optional): Callback for IndexChange.
 */
class Header extends Component {
  state = {
    tabs: [
      { name: "Add", index: 0, btnStyleIndex: 0 },
      { name: "Subtract", index: 1, btnStyleIndex: 0 },
      { name: "Multiply", index: 2, btnStyleIndex: 0 },
      { name: "Divide", index: 3, btnStyleIndex: 0 },
    ],
  };

  handleTabClick = (index) => {
    const tabs = [...this.state.tabs];

    for (let i = 0; i < tabs.length; i++) {
      tabs[i] = {...tabs[i]};
      if(tabs[i].index == index)
        tabs[i].btnStyleIndex = 1;
      else
        tabs[i].btnStyleIndex = 0;
    }

    this.setState({ tabs });
    const e = this.props.onTabIndexChanged;
    if (e !== undefined)
      e(index);
  };

  render() {
    console.log('render');
    const {tabs} = this.state;
    return (
      <div className="nav-bar">
        {tabs.map((tabItem) => (
          <TabItem
            key={tabItem.index}
            tab={tabItem}
            onTabClick={this.handleTabClick}
          />
        ))}
      </div>
    );
  }

  componentDidMount()
  {
    console.log('componentDidMount');
      const e = this.props.initialIndex;
      if (e !== undefined)
        this.handleTabClick(e);
      else
        this.handleTabClick(0);
  }
}

export default Header;
