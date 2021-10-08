import { Box, Flex, Text } from "@chakra-ui/react";

const Movie = ({ movie }) => (
	<Flex flexWrap border="3px" borderColor="tomato">
		<Box w="400px" h="100%" mt={12} ml={12}>
			<Text color="white">{movie.Title}</Text>
			<img alt={movie.Title} src={movie.Poster} w="300px" />
		</Box>
	</Flex>
);

export default Movie;
