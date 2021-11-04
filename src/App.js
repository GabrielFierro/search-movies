import React, { useState } from "react";
// Import for components
import MoviesList from "./components/MoviesList";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm/SearchForm";
// Import for the pagesz
import Detail from "./pages/Detail";
import Home from "./pages/Home";
// Import for the CSS code
import "./App.css";
// Import for chakra-ui component
import { Box, Center, Text } from "@chakra-ui/react";

function App() {
	const url = new URL(document.location);
	const hasId = url.searchParams.has("id");
	const Page = url.searchParams.has("id") ? (
		<Detail id={url.searchParams.get(hasId)} />
	) : (
		<Home />
	);

	return <div bg="primary">{Page}</div>;
}

export default App;
