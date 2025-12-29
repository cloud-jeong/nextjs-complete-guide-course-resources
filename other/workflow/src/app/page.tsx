"use client";

import Image from "next/image";
import styles from "./page.module.css";
import AddButton from "./components/buttons/AddButton";
import EdgeAddButton from "./components/buttons/EdgeAddButton";
import { Source } from "./components/nodes/Nodes";

const [buttonWidth, buttonHeight] = [100, 40];

export default function Home(props: any) {
	const onClickHandler = () => {
		alert("Hi");
	};

	return (
		<>
			<div>
				<AddButton onClick={onClickHandler} />
				<EdgeAddButton
					{...props}
					onClick={() => {}}
					style={{ width: buttonWidth, height: buttonHeight }}
				/>
				<Source
					id={100}
					type="sms"
					data={{
						title: "Hi",
						description: "description",
						onNodeClickCallback: function (id: number) {
							throw new Error("Function not implemented.");
						},
						onDeleteNodeCallback: function (id: number) {
							throw new Error("Function not implemented.");
						},
					}}
					onNodeClick={function (type: string, data: any): void {
						throw new Error("Function not implemented.");
					}}
				/>
			</div>
		</>
	);
}
