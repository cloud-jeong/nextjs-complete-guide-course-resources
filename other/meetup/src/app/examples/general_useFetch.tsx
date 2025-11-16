import useFetch from "./useFetch";

const App = () => {
	const { data, error, isLoading } = useFetch<
		{ id: number; title: string; completed: boolean }[]
	>("https://jsonplaceholder.typicode.com/todos", []);

	if (isLoading) return <div>로딩 중 ...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div>
			{data.map((todo) => (
				<li key={todo.id}>{todo.title}</li>
			))}
		</div>
	);
};
