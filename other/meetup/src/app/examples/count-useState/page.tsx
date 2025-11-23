"use client";

import Link from "next/link";
import { useState } from "react";

const CountUseStatePage = () => {
	console.log("CountUsageStatePage render");

	const [count, SetCount] = useState(0);
	const clickHandler = () => {
		// React의 일괄업데이트(batch update)로 setCount(count+1)을 하면 0+1, 0+1, 0+1을 반복하게 됨.
		// 콜백함수를 사용함으로써 이전 상태값을 매개변수로 새로운 상태를 안전하게 계산함.
		SetCount((count) => count + 1);
		SetCount((count) => count + 1);
		SetCount((count) => count + 1);
	};

	// 초기값에 null을 넣더라도 나중에 저장할 타입까지 고려해 제너릭을 명시함.
	const [name, setName] = useState<string | null>(null);
	const [age, setAge] = useState<number | null>(null);
	const [gender, setGender] = useState<string | null>(null);

	// 개발 상태값을 객체로 묶어서 관리할 수 있음.
	const [formState, setFormState] = useState({
		name: "",
		age: 0,
		gender: "",
	});

	const clickHandler2 = () => {
		setName("Cloud");
		setAge(30);
		setGender("female");
	};

	const clickHandler3 = () => {
		setFormState({ ...formState, age: 20, name: "정대운", gender: "male" });
	};

	return (
		<>
			<div style={{ display: "flex" }}>
				<h3 style={{ margin: "10px" }}>Count: {count}</h3>
				<button onClick={clickHandler}>증가</button>
			</div>
			<div>
				<p>이름: {name}</p>
				<p>나이: {age}</p>
				<p>성별: {gender}</p>
				<button onClick={clickHandler2}>변경</button>
			</div>
			<div>
				<p>이름: {formState.name}</p>
				<p>나이: {formState.age}</p>
				<p>성별: {formState.gender}</p>
				<button onClick={clickHandler3}>변경</button>
			</div>

			<Link href="/examples/count-useState/localState">LocalState Example</Link>
		</>
	);
};

export default CountUseStatePage;
