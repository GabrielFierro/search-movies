// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	styles: {
		global: (props) => ({
			body: {
				margin: 0,
				padding: 0,
				fontFamily: "Montserrat",
				color: mode("gray.800", "whiteAlpha.900")(props),
				bg: mode("#231f1f")(props),
				lineHeight: "base",
			},
		}),
	},
});

export default theme;
