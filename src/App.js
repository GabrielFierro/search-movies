import React from "react";
// Import for the react router component
import { Routes, Route } from "react-router-dom";
// Import for the pages components
import Detail from "./pages/Detail";
import Home from "./pages/Home";
// Import for the CSS code
import "./App.css";

function App() {
	return (
		<div bg="primary">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/detail/:id" element={Detail} />
			</Routes>
		</div>
	);
}

export default App;
