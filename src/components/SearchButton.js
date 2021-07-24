import { Button } from "@chakra-ui/react";

function SearchForm({ children }) {
	return (
		<Button
			w="75px"
			h="45px"
			mt="-5px"
			ml="10px"
			color="white"
			bg="#db0000"
			variant="solid"
			_hover={{ bg: "#aa0000" }}
		>
			{children}
		</Button>
	);
}

export default SearchForm;
