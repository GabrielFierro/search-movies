import React, { useState } from "react";
import SearchButton from "../SearchButton";
import "./SearchForm.css";
import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const API_KEY = "234ddc1c"; // Create a const variable with the key from the API

function SearchForm(props) {
	const [inputMovie, setInput] = useState("");
	const urlToFetch = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
	const PARAMETER = "s=";

	function inputHandleChange(props) {
		// This function set the state for the input state taken the value that
		// the user write
		setInput(props.target.value);
	}

	function handleSubmit(e) {
		// This function uses the fetch to make a query to the api
		e.preventDefault();

		fetch(urlToFetch + PARAMETER + `${inputMovie}`)
			.then((response) => response.json())
			.then((jsonResponse) => {
				const { Search = [], totalResults = "0" } = jsonResponse;
				console.log({ Search, totalResults });
				props.onResults(Search);
			});
	}

	return (
		<Flex>
			<form autoComplete="off" w="500px" onSubmit={(e) => handleSubmit(e)}>
				<Input
					backgroundColor="white"
					color="black"
					width="400px"
					onChange={(e) => inputHandleChange(e)}
					placeholder="Search your movie"
					size="lg"
					variant="outline"
				/>
				<SearchButton>Search</SearchButton>
			</form>
		</Flex>
	);
}

export default SearchForm;
