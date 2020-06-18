import React, { Component } from "react"
import Axios from "axios"

class heroList extends Component {
  url = "/api/"

  state = {
    heroes: [],
  }

  componentDidMount() {
    console.log("fetching STARTED.")

    Axios
      .get(this.url)
      .then((response) => {
        this.setState({ heroes: response.data })
      })
      .catch((err)=>{console.log(`requesting heroes error: ${err.message}`)})
      .then(() => {
        console.log("fetching ENDED.")
      })
  }

  render() {
    const heroes =
      <ul>
        {this.state.heroes.map(hero => <li>{hero}</li>)}
      </ul>

    return <>{this.state.heroes ? heroes : null}</>
  }
}

export default heroList
