import React, { Component } from "react"
import Axios from "axios"
import './HeroList.css'

import Modal from '../UI/Modal/Modal'
import HeroDetail from '../HeroDetail/HeroDetail'

class heroList extends Component {
  // url = "http://localhost:80/api"
  url = "/api"

  state = {
    heroes: [],
    modalOpened: false
  }

  selectedHero = '';

  componentDidMount() {
    Axios
      .get(this.url)
      .then((response) => {
        this.setState({ heroes: response.data._embedded.heroList })
      })
      .catch((err) => { console.log(err.message) })
  }

  getHeroDetail = (selected) => {
    return Axios
      .get(`${this.url}/${selected.id}`)
      .then((response) => {
        const fetchedHero = response.data
        this.setSelectedHero(fetchedHero)
        this.toggleModalHandler(fetchedHero)
      })
      .catch((err) => { console.log('fetching hero detail failed', err) })
  }

  setSelectedHero = (selected) => {
    this.selectedHero = selected;
    console.log(this.selectedHero)
  }

  toggleModalHandler = () => {
    const isModalOpened = this.state.modalOpened;

    this.setState({ modalOpened: !isModalOpened })
  }

  render() {
    const heroes = this.state.heroes ? (
      <ul className="heroList">
        {this.state.heroes.map(hero => {
          return <li key={hero.id} onClick={() => this.getHeroDetail(hero)}>{hero.name}</li>
        })}
      </ul>
    ) : null;


    return (
      <>
        <Modal show={this.state.modalOpened} onClose={this.toggleModalHandler}><HeroDetail name={this.selectedHero.name} id={this.selectedHero.id} /></Modal>
        {heroes}
      </>
    )
  }
}

export default heroList
