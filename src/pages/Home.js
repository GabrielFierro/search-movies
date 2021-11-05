import React, { useState } from "react";
// import for the components from the application
import MoviesList from "../components/MoviesList";
import Title from "../components/Title";
import SearchForm from "../components/SearchForm/SearchForm";
// import for the components from chakra-ui
import { Box, Center, Text } from "@chakra-ui/react";

export default function Home() {
	const [useSearched, setUseSearched] = useState(false);
	const [results, setResults] = useState([]);

	const handleResults = (results) => {
		setResults(results);
		setUseSearched(true);
	};

	function _renderResults() {
		return results.length === 0 ? (
			<Text style={{ color: "white", margin: "10px" }}>
				<Center>
					Sorry! <span> 😞 </span>Results not found!
				</Center>
			</Text>
		) : (
			<MoviesList results={results} />
		);
	}

	return (
		<div>
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
