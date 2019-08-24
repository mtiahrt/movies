import React from 'react';
import PropTypes from 'prop-types';

//functional stateless component
const Movie = ({movie}) => (//destructuring props
        <div>
            <h3>{movie.title}</h3>            
        </div>     
);
export default Movie;
    Movie.propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,           
        }).isRequired,
    };