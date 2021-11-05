import React, { useState } from "react";
import { Heading, Text } from "@chakra-ui/react";

const API_KEY = "234ddc1c"; // Create a const variable with the key from the API

export default function Detail({ id }) {
	const [showData, setShowData] = useState(true);
	const [movie, setMovie] = useState({});
	const { Title, Poster, Actors, Metascore, Plot } = movie;

	function _fetchMovie({ id }) {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
			.then((response) => response.json())
			.then((movie) => {
				console.log("id: " + id);
				console.log({ movie });
				setMovie({ movie });
			});
	}

	return (
		<div>
			{showData ? _fetchMovie() : null}
			<Heading>{Title}</Heading>
			<img src={Poster} alt={Title} />
			<Text>{Actors}</Text>
			<Text>{Metascore}</Text>
			<Text>{Plot}</Text>
		</div>
	);
}
