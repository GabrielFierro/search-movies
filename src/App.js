import React from "react";
// Import for the react router component
import { Switch, Route } from "react-router-dom";
// Import for the pages components
import Detail from "./pages/Detail";
import Home from "./pages/Home";
// Import for the CSS code
import "./App.css";

function App() {
	return (
		<div bg="primary">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/detail/:id" component={Detail} />
			</Switch>
		</div>
	);
}

export default App;
