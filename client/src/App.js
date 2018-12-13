import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Spinner from './Spinner'
import Background from './assets/cardboard.png'
import Divider from './assets/divider.png'

class App extends Component {
  render() {
    const styles={
      centeredContent: {
        textAlign: "center"
      },
      title: {
        fontFamily: "Impact",
        fontSize: "72px",
        color: "#161616",
        letterSpacing: "-0.5px",
      },
      text: {
        padding: "5px 20px",
        color: "#161616",
        letterSpacing: "-0.28px",
        textAlign: "center",
      },
      container: {
        width: "100%",
        maxWidth: 731,
        margin: "auto",
        background: `url(${Background}) no-repeat`
      },
      divider: {
        maxWidth: "calc(80vw)",
      }
    }
    return (
      <div style={styles.container} className="App">
        <Header />
        <div style={styles.centeredContent}>
          <h1 style={styles.title}>SPIN IT!</h1>
          <img alt="divider" src={Divider} style={styles.divider} />
          <p style={styles.text}>Want to try something new? Give the wheel a spin, and we'll choose one for ya.</p>
        </div>
        <Spinner />
      </div>
    );
  }
}

export default App;
