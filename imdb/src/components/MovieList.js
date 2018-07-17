import React from 'react';
import Movie from './Movie.js';

class MovieList extends React.Component {

  render() {

    const movieComponents = this.props.data.map((movie, index) => {
      return <Movie name={movie.name} key={index}>{movie.showtime}</Movie>
    })

    return (
      <div className="movie-list">
        {movieComponents}
        <a href="#">See more openings this week</a>
      </div>
    )
  }
  // render() {
  //   return (
  //     <div>
  //       <h1>This is {this.props.data.name}</h1>
  //       <p>You have £{this.props.data.name}</p>
  //       <button onClick={this.props.data.name}>Get showtimes</button>
  //     </div>
  //   )
  // }
}

export default MovieList;
