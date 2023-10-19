import React, { useState } from "react";
import "../App.css";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Toggler = (props) => {
	const [state, setState] = useState(true);

	return (
		<div className="my-5 toggle-div">
			{/* <Form className="container">
            <FormGroup switch className="centered">
					<Input type="switch" role="switch" className="toggler-input" />
					<Label check className="">
						Toggle
					</Label>
				</FormGroup>
			</Form> */}

			<input type="checkbox" id="switch" />
			<label for="switch"></label>

			<h1>Toggle Theme</h1>
		</div>
	);
};

export default Toggler;
