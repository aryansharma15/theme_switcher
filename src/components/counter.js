import React, { useState } from "react";
import "../App.css";

function Counter() {
	let [count, setCount] = useState("0");

	return (
		<div className="counter">
			<h1>Currently: {count}</h1>
			<button
				className="counter-btns incr-btn"
				onClick={() => {
					setCount((count += 1));
				}}
			>
				Increment
			</button>
			<button
				className="counter-btns decr-btn"
				onClick={() => {
					setCount((count -= 1));
				}}
			>
				Decrement
			</button>
		</div>
	);
}

export default Counter;
