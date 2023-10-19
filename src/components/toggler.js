import React, { useState } from "react";
import "../App.css";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Toggler = (props) => {
	const [state, setState] = useState(true);

	return (
		<div className="my-5">
			{/* <button className="mx-3">Toggle Theme</button>
			<Button className="mx-3" color="danger">
				Toggle theme
			</Button> */}
			<Form className="container">
				<FormGroup switch className="centered">
					<Input type="switch" role="switch" className="toggler-input" />
					<Label check className="">
						Toggle
					</Label>
				</FormGroup>
			</Form>
			{/* <Label className="custom-toggle custom-toggle-primary">
				<Input type="checkbox" checked="" className="mx-3" />
				<span className="custom-toggle-slider rounded-circle" data-label-off="OFF" data-label-on="ON"></span>
			</Label> */}
		</div>
	);
};

export default Toggler;
