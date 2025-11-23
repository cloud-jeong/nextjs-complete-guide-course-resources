import { useCountContext } from "../hooks/useCountContext";

const CountDisplay = () => {
	const { count } = useCountContext();
	return (
		<>
			<p>Count(using contextapi): {count}</p>
		</>
	);
};

export default CountDisplay;
