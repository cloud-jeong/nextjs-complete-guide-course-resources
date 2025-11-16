import { useState, useEffect } from "react";

const App = () => {
	const [data, setData] = useState<
		{ id: number; title: string; completed: boolean }[]
	>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/todos"
				);
				if (!response.ok) {
					throw new Error("데이터를 불러오지 못했습니다.");
				}
				const data = await response.json();
				setData(data);
			} catch (error) {
				setError(
					error instanceof Error
						? error.message
						: "알 수 없는 오류가 발생했습니다."
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

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
