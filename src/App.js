import { useState } from "react";
import MoviesList from "./components/MoviesList";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
	const [results, setResults] = useState([]);

	const handleResults = (results) => {
		setResults(results);
	};

	return (
		<div className="App" bg="primary">
			<Title>Search Movies</Title>
			<Box display="flex" justifyContent="center" p={1}>
				<SearchForm onResults={handleResults} />
			</Box>
			{results.length === 0 ? (
				<p style={{ color: "white", margin: "10px" }}>Sin resultados</p>
			) : (
				<MoviesList results={results} />
			)}
		</div>
	);
}

export default App;
