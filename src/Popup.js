import React, { Component } from 'react'

class Popup extends Component {
  render() {
    const { onClose, beerSelection, openPopup } = this.props
    const styles = {
      popup: {
        width: "100%",
        maxWidth: "400px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: '#ffffff',
        color: "#333333",
        zIndex: 1,
        boxShadow: "0px 2px 5px rgba(0,0,0,.3)",
        borderRadius: "5px"
      },
      popupContent: {
        padding: "20px",
        textAlign: "center"
      },
      button: {
        cursor: "pointer",
        background: "rgb(234, 135, 29)",
        padding: "5px 10px",
        outline: "none",
        border: "none",
        color: "#fff",
        fontSize: "1.2em",
        fontFamily: "RobotoSlab-Bold, Aleo",
        borderRadius: "2px"
      }
    }
    return (
      openPopup ?
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <div style={styles.header}>
              <h4>Your Beer Selection</h4>
            </div>
            <div style={styles.content}>
              <h2>{ beerSelection }</h2>
            </div>
            <div style={styles.footer}>
              <button style={styles.button} onClick={onClose}>CLOSE</button>
            </div>
          </div>
        </div>
      : null
    )
  }
}

export default Popup
