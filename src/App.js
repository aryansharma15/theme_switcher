import "./App.css";
import React, { useState } from "react";
import Toggler from "./components/toggler";
import Counter from "./components/counter";

function App() {
	const [theme, setTheme] = useState({
		color: "",
		bgColor: "",
	});

	const changeTheme = () => {
		const newColor = theme.color ? "" : "#ffffff";
		const newBgColor = theme.bgColor ? "" : "#2d2d2d";

		setTheme({
			color: newColor,
			bgColor: newBgColor,
		});
	};

	return (
		<div className="App" style={{ backgroundColor: theme.bgColor, color: theme.color }}>
			<div>
				<Toggler changeTheme={changeTheme}></Toggler>
				<Counter></Counter>
			</div>
		</div>
	);
}

export default App;
