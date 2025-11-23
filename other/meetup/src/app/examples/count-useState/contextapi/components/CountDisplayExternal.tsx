import { useCountContext } from "../hooks/useCountContext";

const CountDisplayExternal = () => {
	const { count } = useCountContext();
	return (
		<>
			<p>Count display external: {count}</p>
		</>
	);
};

export default CountDisplayExternal;
