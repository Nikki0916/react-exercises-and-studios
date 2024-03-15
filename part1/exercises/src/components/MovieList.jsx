import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Harry Potter", "Encanto", "Grease", "Jumanji"];
      return (
      <div>
         <h3 className = {classes.movieHeading}>Favorit Movies</h3>
         <ol>
            <li className={classes.movieText}>{movies[0]}</li>
            <li className={classes.movieText}>{movies[1]}</li>
            <li className={classes.movieText}>{movies[2]}</li>
            <li className={classes.movieText}>{movies[3]}</li>
         </ol>
      </div>
      );
   }
}

export default MovieList;