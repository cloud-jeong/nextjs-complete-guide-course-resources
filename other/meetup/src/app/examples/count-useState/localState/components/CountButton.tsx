const CountButtons = ({
	increment,
	decrement,
	reset,
}: {
	increment: () => void;
	decrement: () => void;
	reset: () => void;
}) => {
	return (
		<>
			<button onClick={increment}>증가</button>
			<button onClick={decrement}>감소</button>
			<button onClick={reset}>리셋</button>
		</>
	);
};

export default CountButtons;
