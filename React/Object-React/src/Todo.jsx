import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
	let [todos, setTodos] = useState([
		{ task: "Sample", id: uuidv4(), isDone: false },
	]);
	
	let [newTodo, setNewTodo] = useState("");

	let addNewtask = () => {
		setTodos((prevTodos) => {
			return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
		});
		setNewTodo("");
	};

	let updatetodo = (event) => {
		setNewTodo(event.target.value);
	};

	let deleteTodo = (id) => {
		setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id));
	};

	let markAllDone = () => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				return {
					...todo,
					isDone: true,
				};
			})
		);
	};

	let markDone = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id == id) {
					return {
						...todo,
						isDone: true,
					};
				} else {
					return todo;
				}
			})
		);
	};

	return (
		<div>
			<input
				placeholder="Add Todo"
				value={newTodo}
				onChange={updatetodo}
			></input>
			<br />
			<br />
			<button onClick={addNewtask}>Add</button>
			<br />
			<br />
			<br />

			<hr />
			<h3>Todo List</h3>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.task}</span> &nbsp;&nbsp;&nbsp;
						<span onClick={() => deleteTodo(todo.id)}>
							<i className="fa-regular fa-trash-can"></i>
						</span>
						&nbsp;&nbsp;&nbsp;
						<span onClick={() => markDone(todo.id)}>
							<i class="fa-solid fa-square-check"></i>
						</span>
					</li>
				))}
			</ul>
			<span onClick={markAllDone}>
				<i class="fa-solid fa-square-check"></i>
			</span>
		</div>
	);
}
