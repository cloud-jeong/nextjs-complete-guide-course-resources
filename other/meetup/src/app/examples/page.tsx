"use client";

import Link from "next/link";
import { useState } from "react";

type Todos = {
	userId: string;
	id: number;
	title: string;
	completed: boolean;
};

const TodosFetchPage = () => {
	const [todoId, setTodoId] = useState("");
	const [todos, setTodos] = useState<Todos[]>([]);

	const getTodos = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			setTodos(data);
		} catch (error) {
			console.error(error);
		}
	};

	const postTodo = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						userId: "1000",
						title: "New Title",
						completed: false,
					}),
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			setTodos([...todos, data]);
		} catch (error) {
			console.error(error);
		}
	};

	const toggleTodo = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${todoId}`,
				{
					method: "PATCH",
					body: JSON.stringify({ completed: true }),
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();

			setTodos(
				todos.map((todo) =>
					todo.id === Number(todoId) ? { ...todo, done: data.done } : todo
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	const updateTodo = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${todoId}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ title: "Update Todo" }),
				}
			);

			if (!response.ok) {
				console.log(response);
				throw new Error("Network response was not ok");
			}

			const data = await response.json();

			setTodos(todos.map((todo) => (todo.id === Number(todoId) ? data : todo)));
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTodo = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${todoId}`,
				{
					method: "DELETE",
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			setTodos(todos.filter((todo) => todo.id !== Number(todoId)));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<Link href="/examples/count">Count 예제</Link>
			<h1>Todos</h1>
			<pre>{JSON.stringify(todos, null, 2)}</pre>

			<div>
				<label htmlFor="todoId"> Todo ID: </label>
				<input
					id="todoId"
					className="border p-3 rounded mb"
					type="text"
					value={todoId}
					onChange={(e) => setTodoId(e.target.value)}
				/>
			</div>
			<button
				className="mr-3 bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
				onClick={getTodos}
			>
				Get Todos
			</button>
			<button
				className="mr-3 bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
				onClick={postTodo}
			>
				Post Todos
			</button>
			<button
				className="mr-3 bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
				onClick={toggleTodo}
			>
				Toggle Todos
			</button>
			<button
				className="mr-3 bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
				onClick={updateTodo}
			>
				Update Todos
			</button>
			<button
				className="mr-3 mb-3  bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
				onClick={deleteTodo}
			>
				Delete Todos
			</button>
		</div>
	);
};

export default TodosFetchPage;
