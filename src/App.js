import { useState } from "react";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";
import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";

function App() {
	const [results, setResults] = useState([]);

	const handleResults = (results) => {
		setResults(results);
	};

	function renderResults() {
		return results.map((movie) => {
			return (
				<Flex key={movie.imdbID} flexWrap border="3px" borderColor="tomato	">
					<Box w="400px" h="100%" mt={12} ml={12}>
						<Text color="white">{movie.Title}</Text>
						<img alt={movie.Title} src={movie.Poster} w="300px" />
					</Box>
				</Flex>
				/*
				<p key={movie.imdbID} style={{ color: "white" }}>
					{movie.Title}
				</p>
				*/
			);
		});
	}

	return (
		<div className="App" bg="primary">
			<Title>Search Movies</Title>
			<Box display="flex" justifyContent="center" p={1}>
				<SearchForm onResults={handleResults} />
			</Box>
			{results.length === 0 ? (
				<p style={{ color: "white", margin: "10px" }}>Sin resultados</p>
			) : (
				renderResults()
			)}
		</div>
	);
}

export default App;
