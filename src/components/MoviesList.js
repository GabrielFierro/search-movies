import Movie from "./Movie.js";

// This function return a component Movie with the props movie, 
// that represent each element of the array with its own key.
function MoviesList({ results }) {
	return results.map((movie) => {
		return <Movie movie={movie} key={movie.imdbID} />;
	});
}

export default MoviesList;
