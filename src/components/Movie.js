import { Box, Flex, Text } from "@chakra-ui/react";

const Movie = ({ movie }) => (
	// This component display a box with the title, year and the poster
	// of the searched movie
	<Flex flexWrap border="3px" borderColor="tomato">
		<Box w="400px" h="100%" mt={12} ml={12}>
			<Text color="white">{movie.Title}</Text>
			<Text color="white">{movie.Year}</Text>
			<img alt={movie.Title} src={movie.Poster} w="300px" />
		</Box>
	</Flex>
);

export default Movie;
