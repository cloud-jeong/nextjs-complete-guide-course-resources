"use client";

import { Dropdown, Menu } from "antd";
import AddButton from "./AddButton";
import styles from "./EdgeAddButton.module.scss";

const EdgeAddButton = (props: {
	style: string;
	data: string;
	id: number;
	onClick: () => {};
}) => {
	const { style, data, id } = props;

	const content = (
		<Menu
			onClick={(event) => {
				alert("Menu onclick event");
			}}
		>
			<Menu.Item key="email">Email</Menu.Item>
			<Menu.Item key="sms">SMS</Menu.Item>
			<Menu.Item key="rule">Rule</Menu.Item>
			<Menu.Item key="end">End</Menu.Item>
		</Menu>
	);

	return (
		<div className={styles.EdgeAddButton}>
			<Dropdown trigger={["contextMenu"]}>
				<AddButton {...props} />
			</Dropdown>
		</div>
	);
};

export default EdgeAddButton;
