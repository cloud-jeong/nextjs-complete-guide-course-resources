import { useCounterStore } from "../store/countstore";

const CountDisplayExternal = () => {
	const { count } = useCounterStore();
	return (
		<>
			<p>Count display external: {count}</p>
		</>
	);
};

export default CountDisplayExternal;
