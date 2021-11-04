import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Movie = ({ movie }) => (
	// This component display a box with the title, year and the poster
	// of the searched movie
	<a href={`?id=${movie.imdbID}`}>
		<Flex flexWrap border="3px" borderColor="tomato">
			<Box w="400px" h="100%" my={8}>
				<Text color="white">{movie.Title}</Text>
				<Text color="white">{movie.Year}</Text>
				<img alt={movie.Title} src={movie.Poster} w="300px" />
			</Box>
		</Flex>
	</a>
);

export default Movie;
