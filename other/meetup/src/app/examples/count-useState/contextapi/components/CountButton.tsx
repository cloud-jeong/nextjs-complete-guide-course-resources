import { useCountContext } from "../hooks/useCountContext";

const CountButtons = () => {
	const { increment, decrement, reset } = useCountContext();
	return (
		<>
			<button onClick={increment}>증가</button>
			<button onClick={decrement}>감소</button>
			<button onClick={reset}>리셋</button>
		</>
	);
};

export default CountButtons;
