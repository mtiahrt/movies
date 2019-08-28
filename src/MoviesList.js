import React, {Component} from 'react';
import Movie from './Movie';
import styled from 'styled-components';

let fullMovieList;
class MoviesList extends Component {
  state = {
    movies: []
  }
  async componentDidMount(){
    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=16116ab71bb30c2ece0730d8e2688eef&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      fullMovieList = movies.results;
      this.setState({
        movies: movies.results
      })
    }catch(e){
      console.log(e);
    }
  }
  
  render() {
    const handleTextChange = e => {  
      const filteredMovies = fullMovieList.filter(item => item.title.toLowerCase().substring(0, e.target.value.length) === e.target.value.toLowerCase());
      
    this.setState({
      movies: filteredMovies
    })
    }

    return (
      <div>
        <label style={FilterInputStyle}>
          Filter Movies
        </label>
        <input type="text" name="movieFilter" onChange={handleTextChange} /> 
        <MovieGrid>
            {this.state.movies.map(movie => <Movie key ={movie.id} movie={movie} />)}     
        </MovieGrid>  
      </div>            
    );
  }
}
export default MoviesList;
const FilterInputStyle = {
  color: "white",
  padding: "10px"
}
const MovieGrid = styled.div`
display: grid;
padding: 1rem;
grid-template-columns: repeat(6,1fr);
grid-row-gap: 1rem;
`;