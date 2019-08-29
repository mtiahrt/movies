import React, {Component} from 'react';
import Movie from './Movie';
import styled from 'styled-components';

class MoviesList extends Component {
  state = {
    movies: [],
    filterString:'',
  }
  async componentDidMount(){
    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=16116ab71bb30c2ece0730d8e2688eef&primary_release_date.gte=2018-09-15&primary_release_date.lte=2019-10-22');
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    }catch(e){
      console.log(e);
    }
  }
  
  render() {
    return (
      <div>
        <label style={FilterInputStyle}>
          Filter Movies
        </label>
        <input type="text" name="movieFilter" onChange={e => this.setState({filterString: e.target.value.toLowerCase()})}/> 
        <MovieGrid>
            {this.state.movies.filter(item => item.title.toLowerCase().includes(this.state.filterString.toLowerCase())).map(movie => <Movie key ={movie.id} movie={movie} />)}     
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