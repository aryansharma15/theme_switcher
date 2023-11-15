import React, { useState } from "react";
import "../App.css";

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Toggler = ({ changeTheme }) => {
	return (
		<div className=" toggle-div">
			<input type="checkbox" id="switch" onClick={changeTheme} />
			<label htmlFor="switch"></label>

			<h1>Toggle Theme</h1>
		</div>
	);
};

export default Toggler;
