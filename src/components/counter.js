import React, { useState } from "react";
import "../App.css";

function Counter() {
	const [count, setCount] = useState(0);
	const [intervalId, setIntervalId] = useState(null);

	const handleIncrement = () => {
		setCount((prevcount) => prevcount + 1);
	};

	const handleDecrement = () => {
		setCount((prevcount) => prevcount - 1);
	};

	const startInc = () => {
		handleIncrement();

		const id = setInterval(() => {
			handleIncrement();
		}, 200);
		setIntervalId(id);
	};

	const startDec = () => {
		handleDecrement();

		const id = setInterval(() => {
			handleDecrement();
		}, 200);
		setIntervalId(id);
	};

	const stopTheCount = () => {
		// clearing the interval when button is no longer pressed
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};

	return (
		<div className="counter">
			<div className="counter-content">
				<h1>Current count: {count}</h1>
				<div className="btns">
					<button className="counter-btns incr-btn" onMouseDown={startInc} onMouseUp={stopTheCount}>
						Increment
					</button>
					<button className="counter-btns decr-btn" onMouseDown={startDec} onMouseUp={stopTheCount}>
						Decrement
					</button>
					<button
						className="counter-btns reset-btn"
						onClick={() => {
							setCount(0);
						}}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default Counter;
