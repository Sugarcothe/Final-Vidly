import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state =  {
    movies: getMovies()
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies })
    
  }

  render() {

    if (this.state.movies === 0) return <p>There are no Movies, add to the bucket!</p>;

    return (
      <div>
        <p className="mt-5">Showing {this.state.movies.length} movies in the database</p>

      
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Remove</button></td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Movies
