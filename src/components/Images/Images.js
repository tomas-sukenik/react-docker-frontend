import React, { Component } from "react"
import Axios from "axios"

class Images extends Component {
  url = "http://jsonplaceholder.typicode.com/photos"

  state = {
    images: [],
  }

  componentDidMount() {
    console.log("fetching images STARTED.")

    Axios.get(this.url).then((response) => {
      response.data.length = 10

      console.log("fetching images ENDED.")
      this.setState({ images: response.data })
    })
  }

  render() {
    const images = this.state.images.map((image) => {
      return <img src={image.thumbnailUrl} alt={image.title} key={image.id} />
    })

    return <div>{images}</div>
  }
}

export default Images
