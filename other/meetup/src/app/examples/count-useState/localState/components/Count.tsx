import CountButtons from "./CountButton";
import CountDisplay from "./CountDisplay";

const CountPage = ({
	count,
	increment,
	decrement,
	reset,
}: {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
}) => {
	return (
		<>
			<CountDisplay count={count}></CountDisplay>
			<CountButtons
				increment={increment}
				decrement={decrement}
				reset={reset}
			></CountButtons>
		</>
	);
};

export default CountPage;
