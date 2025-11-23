"use client";
import Count from "./components/Count";
import CountDisplayExternal from "./components/CountDisplayExternal";
import CountProvider from "./providers/CountProvider";

const ContextPage = () => {
	return (
		<>
			<CountProvider>
				<Count />
				<CountDisplayExternal />
			</CountProvider>
		</>
	);
};

export default ContextPage;
