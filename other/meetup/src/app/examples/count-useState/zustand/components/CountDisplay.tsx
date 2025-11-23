import { useCounterStore } from "../store/countstore";

const CountDisplay = () => {
	const { count } = useCounterStore();
	return (
		<>
			<p>Count(using zustand): {count}</p>
		</>
	);
};

export default CountDisplay;
