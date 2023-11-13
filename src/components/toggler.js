import React, { useState } from "react";
import "../App.css";

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Toggler = (props) => {
	const [color, setColor] = useState("");
	const [text, setText] = useState("");

	const Changer = () => {
		setColor("#2d2d2d");
		setText("#ffffff");
	};

	return (
		<div className=" toggle-div">
			<input type="checkbox" id="switch" onClick={Changer} />
			<label htmlFor="switch"></label>

			<h1>Toggle Theme</h1>
		</div>
	);
};

export default Toggler;
