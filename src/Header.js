import React, { Component } from 'react';
import Home from "./assets/house.png"

class Header extends Component {
  render() {
    const styles = {
      header: {
        background: "#161616",
        padding: "20px 35px"
      },
      icon: {
        width: "auto",
        maxHeight: "43px"
      }
    }
    return (
      <div style={styles.header}>
        <img alt="home icon" style={styles.icon} src={Home} />
      </div>
    );
  }
}

export default Header;
