import React, { Component } from 'react';
import Popup from './Popup'
import Bottle from './assets/bottle.png'
import Flight from './assets/flight-circle.png'

class Spinner extends Component {
  constructor() {
		super()
		this.state = {
			degrees: 0,
      spinTime: 0,
      openPopup: false
		}
	}

  componentDidMount = () => {
    fetch(`/beers`, {
 			method: 'GET'
 		})
 		.then(response => response.json())
    .then(response => this.setState({beers: response}))
  }

  spin = () => {
    const degrees = Math.floor(Math.random() * (120 - 48) + 48) * 30
    const beerSelection = ((this.state.degrees + degrees) / 30) % 12
    const spinTime = Math.floor((this.state.degrees + degrees - this.state.degrees) / 360)

    this.setState({
      disabled: true,
      beerSelection: this.state.beers[beerSelection],
      degrees: this.state.degrees + degrees,
      spinTime: spinTime
    }, () => {
        setTimeout(
          function() {
            this.setState({
              disabled: true,
              openPopup: true
            })
          }.bind(this), spinTime * 1000
        )
      }
    )
  }

  close = () => {
    this.setState({
      disabled: false,
      openPopup: false
    })
  }

  render() {
    const { degrees, spinTime, openPopup, disabled, beerSelection } = this.state
    const styles = {
      container: {
        maxHeight: "100vw"
      },
      flight: {
        background: `url(${Flight}) no-repeat 50% 50%`,
        backgroundSize: "contain",
        padding: "10vh 0",
        textAlign: "center",
      },
      bottle: {
        cursor: disabled ? "default" : "pointer",
        transform: `rotate(${degrees}deg)`,
        transition: `transform ease-out ${spinTime}s`,
        transformOrigin: "center center",
        maxHeight: "calc(100vw - 20vh)"
      }
    }
    return (
      <div style={styles.container}>
        <Popup openPopup={openPopup} beerSelection={beerSelection} onClose={this.close}  />
        <div style={styles.flight}>
          <img alt="Bottle" id="bottle" onClick={ !disabled ? this.spin : null } style={styles.bottle} src={Bottle} />
        </div>
      </div>
    )
  }
}

export default Spinner
