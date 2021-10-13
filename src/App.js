import { useState } from "react";
// Import for components
import MoviesList from "./components/MoviesList";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm/SearchForm";
// Import for the CSS code
import "./App.css";
// Import for chakra-ui component
import { Box, Center, Text } from "@chakra-ui/react";

function App() {
	const [results, setResults] = useState([]);
	const [useSearched, setUseSearched] = useState(false);

	const handleResults = (results) => {
		setResults(results);
		setUseSearched(true);
	};

	function _renderResults() {
		return results.length === 0 ? (
			<Text style={{ color: "white", margin: "10px" }}>
				<Center>Sorry! 😞 Results not found!</Center>
			</Text>
		) : (
			<MoviesList results={results} />
		);
	}

	return (
		<div bg="primary">
			<Title>
				<Center>Search Movies</Center>
			</Title>
			<Box display="flex" justifyContent="center" p={2}>
				<SearchForm onResults={handleResults} />
			</Box>
			{useSearched ? (
				_renderResults()
			) : (
				<Center>
					<Text style={{ color: "white" }}>Use the form to search a movie</Text>
				</Center>
			)}
		</div>
	);
}

export default App;
