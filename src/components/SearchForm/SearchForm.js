import React, { useState } from "react";
import SearchButton from "../SearchButton";
import "./SearchForm.css";
import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const API_KEY = "234ddc1c";

function SearchForm(props) {
	const [inputMovie, setInput] = useState("");
	const urlToFetch = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
	const PARAMETER = "s=";
	function inputHandleChange(props) {
		setInput(props.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		fetch(urlToFetch + PARAMETER + `${inputMovie}`)
			.then((response) => response.json())
			.then((jsonResponse) => {
				const { Search, totalResults } = jsonResponse;
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
