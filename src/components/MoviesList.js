import Movie from "./Movie.js";

// This function return a component Movie with the props movie,
// that represent each element of the array with its own key.
function MoviesList({ results }) {
	return (
		<div className="MoviesList">
			{results.map((movie) => {
				return (
					<div key={movie.imdbID} className="MoviesList-item">
						<Movie movie={movie} />;
					</div>
				);
			})}
		</div>
	);
}

export default MoviesList;
