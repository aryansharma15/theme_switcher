import "./App.css";
import React from "react";
import Toggler from "./components/toggler";
import Counter from "./components/counter";

function App() {
	return (
		<div className="App">
			<div>
				<Toggler></Toggler>
				<Counter></Counter>
			</div>
		</div>
	);
}

export default App;
