import React, { Component } from "react"
import Axios from "axios"
import './HeroList.css'

class heroList extends Component {
  // url = "http://localhost:80/api"
  url = "/api"

  state = {
    heroes: [],
  }

  componentDidMount() {
    console.log("fetching STARTED.")

    Axios
      .get(this.url)
      .then((response) => {
        this.setState({ heroes: response.data._embedded.heroList })
      })
      .catch((err) => { console.log(err.message) })
      .then(() => {
        console.log("fetching ENDED.")
      })
  }

  render() {
    const heroes =
      <ul className="heroList">
        {this.state.heroes.map(hero => <li key={hero.id}>{hero.name}</li>)}
      </ul>

    return <>{this.state.heroes ? heroes : null}</>
  }
}

export default heroList
