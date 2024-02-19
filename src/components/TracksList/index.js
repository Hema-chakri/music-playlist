import {Component} from 'react'

class TracksList extends Component {
  render() {
    const {trackDetails} = this.props
    const {imageUrl, name, genre, duration} = trackDetails
    return (
      <li className="eachItem">
        <img src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
        <p>{duration}</p>
        <button type="button" data-testid="delete">
          Delete
        </button>
      </li>
    )
  }
}

export default TracksList
