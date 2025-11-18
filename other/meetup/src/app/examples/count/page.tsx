"use client";
import { memo, useCallback, useState } from "react";

const MemoA = memo(function A() {
	console.log("MemoA is rendered");
	return (
		<>
			<div>Child Component</div>
		</>
	);
});

const CountPage = () => {
	console.log("CountPage render");
	const [count, setCount] = useState(0);
	const increment = useCallback(() => setCount((count) => count + 1), []);
	return (
		<>
			<h1>App Count: {count}</h1>
			<button onClick={increment}>증가</button>
			<MemoA />
		</>
	);
};

export default CountPage;
