"use client";

import { useReducer } from "react";
import { counterReducer } from "../reducer/counterReducer";

const CountReducerPage = () => {
	console.log("CountReducerPage render");
	const [count, dispatch] = useReducer(counterReducer, 0);

	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
			<button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
		</>
	);
};

export default CountReducerPage;
