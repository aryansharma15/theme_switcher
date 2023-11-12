import React, { useState } from "react";
import "../App.css";

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Toggler = (props) => {
	const [state, setState] = useState("");

	const Changer = () => {
		setState(false);
	};

	return (
		<div className="my-5 toggle-div">
			<input type="checkbox" id="switch" />
			<label htmlFor="switch"></label>

			<h1>Toggle Theme</h1>
		</div>
	);
};

export default Toggler;
