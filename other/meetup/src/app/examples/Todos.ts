import axios from "axios";
import { useState } from "react";

type Todos = {
	userId: string;
	id: number;
	title: string;
	completed: boolean;
};

const TodosPage = () => {
	const [todos, setTodos] = useState<Todos[]>([]);

	const getTodos = async () => {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/todos"
			);
			setTodos(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const postTodo = async () => {
		try {
			const response = await axios.post(
				"https://jsonplaceholder.typicode.com/todos",
				{
					title: "New Title",
				}
			);
			setTodos([...todos, response.data]);
		} catch (error) {
			console.error(error);
		}
	};

	const toggleTodo = async () => {
		const todoId = 1;
		try {
			const response = await axios.patch(
				`https://jsonplaceholder.typicode.com/todos/${todoId}/done`
			);
			setTodos(
				todos.map((todo) =>
					todo.id === Number(todoId)
						? { ...todo, done: response.data.done }
						: todo
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	const updateTodo = async () => {
		const todoId = 1;
		try {
			const response = await axios.put(
				`https://jsonplaceholder.typicode.com/todos/${todoId}`,
				{
					title: "Updated toto",
				}
			);
			setTodos(
				todos.map((todo) => (todo.id === Number(todoId) ? response.data : todo))
			);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTodo = async () => {
		const todoId = 1;
		try {
			await axios.delete(
				`https://jsonplaceholder.typicode.com/todos/${todoId}`
			);
			setTodos(todos.filter((todo) => todo.id !== Number(todoId)));
		} catch (error) {
			console.error(error);
		}
	};
};

export default TodosPage;
