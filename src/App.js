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

	const handleResults = (results) => {
		setResults(results);
	};

	return (
		<div bg="primary">
			<Title>
				<Center>Search Movies</Center>
			</Title>
			<Box display="flex" justifyContent="center" p={2}>
				<SearchForm onResults={handleResults} />
			</Box>
			{results.length === 0 ? (
				<Text style={{ color: "white", margin: "10px" }}>
					<Center>Sin resultados</Center>
				</Text>
			) : (
				<MoviesList results={results} />
			)}
		</div>
	);
}

export default App;
