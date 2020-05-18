import React, { Component } from "react"
import Images from "../Images/Images"
import "./Cockpit.css"

class Cockpit extends Component {
  state = {
    showImages: false,
  }

  toggleImagesHandler = () => {
    console.log("button clicked.")

    const doesShow = this.state.showImages
    this.setState({ showImages: !doesShow })
  }

  render() {
    return (
      <div>
        <button className="mainBtn" onClick={this.toggleImagesHandler}>
          Load Image
        </button>
        {this.state.showImages ? <Images /> : null}
      </div>
    )
  }
}

export default Cockpit
