import React from 'react';
import MovieList from '../components/MovieList';

class MovieBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        name: "Equity",
        showtime: "14.30"
      },
      {
        name: "Speed",
        showtime: "16.00"
      },
      {
        name: "Senna",
        showtime: "19.30"
      }]
    }
  }

  render() {
    return (
      <div>
        <h2>UK Opening this Week</h2>
        <MovieList data={this.state.data} />
        <button onClick={this.state.name}>Get showtimes</button>
      </div>
    )
  }

}

export default MovieBox;
