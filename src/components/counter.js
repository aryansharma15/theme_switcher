import React, { useState } from "react";

function Counter() {
	let [count, setCount] = useState("0");

	return (
		<div>
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
