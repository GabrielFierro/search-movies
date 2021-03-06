import React from "react";
import { Button } from "@chakra-ui/react";

function SearchForm({ children }) {
	return (
		<Button
			mt="-4px"
			color="white"
			bg="#db0000"
			variant="solid"
			_hover={{ bg: "#aa0000" }}
			size="lg"
		>
			{children}
		</Button>
	);
}

export default SearchForm;
