import React from 'react';

class Movie extends React.Component {

  render() {
    return (
      <div className="movie">
        <h4>{this.props.name} {this.props.children}</h4>
      </div>
    )
  }
}

export default Movie;
