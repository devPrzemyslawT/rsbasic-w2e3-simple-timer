import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [timerValue, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(prevCount => prevCount + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Current timer value:</p>
				<p>{timerValue}</p>
			</header>
		</div>
	);
}

export default App;
