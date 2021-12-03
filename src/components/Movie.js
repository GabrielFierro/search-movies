import React from "react";
// Imports for the chakra ui components
import { Box, Flex, Text } from "@chakra-ui/react";
// Imports for the react router component
import { Link } from "react-router-dom";

const Movie = ({ movie }) => (
	// This component display a box with the title, year and the poster
	// of the searched movie
	<Link to={`/detail/${movie.imdbID}`}>
		<Flex flexWrap border="3px" borderColor="tomato">
			<Box w="400px" h="100%" my={8}>
				<Text color="white">{movie.Title}</Text>
				<Text color="white">{movie.Year}</Text>
				<img alt={movie.Title} src={movie.Poster} w="300px" />
			</Box>
		</Flex>
	</Link>
);

export default Movie;
