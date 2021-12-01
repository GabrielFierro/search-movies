import React from "react";
// Import for the pagesz
import Detail from "./pages/Detail";
import Home from "./pages/Home";
// Import for the CSS code
import "./App.css";

function App() {
	const url = new URL(document.location);
	const hasId = url.searchParams.has("id");
	const Page = url.searchParams.has("id") ? (
		<Detail id={url.searchParams.get(hasId)} />
	) : (
		<Home />
	);

	return <div bg="primary">{Page}</div>;
}

export default App;
