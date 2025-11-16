import { useState, useEffect } from "react";

const App = () => {
	// 초기값인 빈배열([])을 보고 never 또는 any type으로 추정
	// 이에 따라 아래 map()으로 순회할 경우 type error(never' 형식에 'title' 속성이 없습니다) 발생
	// const [data, setData] = useState([])

	// 아래와 같이 객체로 type을 명시하면 해결됨.
	const [data, setData] = useState<
		{ id: number; title: string; completed: boolean }[]
	>([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			);
			if (!response.ok) {
				throw new Error("데이터를 불러오지 못했습니다.");
			}
			const data = await response.json();
			setData(data);
		};

		fetchData();
	}, []);

	return (
		<div>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

			{/* never' 형식에 'title' 속성이 없습니다 */}
			{data.map((todo) => (
				<li key={todo.id}>{todo.title}</li>
			))}
		</div>
	);
};
