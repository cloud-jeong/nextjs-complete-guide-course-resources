import { useCounterStore } from "../store/countstore";

const CountButtons = () => {
	const increment = useCounterStore((state) => state.increment);
	const decrement = useCounterStore((state) => state.decrement);
	const reset = useCounterStore((state) => state.reset);

	return (
		<>
			<button onClick={increment}>증가</button>
			<button onClick={decrement}>감소</button>
			<button onClick={reset}>초기화</button>
		</>
	);
};

export default CountButtons;
