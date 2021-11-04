import React from "react";
import { Heading } from "@chakra-ui/react";

function Title({ children }) {
	return (
		<Heading color="#db0000" as="h1" size="4xl" isTruncated pt={12} mb={12}>
			{children}
		</Heading>
	);
}

export default Title;
