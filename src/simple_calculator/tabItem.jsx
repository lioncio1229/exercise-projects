import { React, Component } from "react";

class TabItem extends Component {
  render() {
    const { tab, onTabClick } = this.props;
    const { name, index, btnStyleIndex } = tab;

    return (
      <button
        onClick={() => onTabClick(index)}
        className={this.updateButtonStyle(btnStyleIndex)}
      >
        {name}
      </button>
    );
  }
  updateButtonStyle(buttonStyleIndex) {
    let styleClass = "nav-btn ";
    return styleClass + (buttonStyleIndex === 0
      ? "nav-btn-default"
      : "nav-btn-selected");
  }
}

export default TabItem;
