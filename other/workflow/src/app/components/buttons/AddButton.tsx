"use client";

import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AddButton = (props: { onClick: () => void }) => {
	const { onClick } = props;

	return (
		<>
			<Button
				shape="circle"
				size="small"
				icon={<PlusOutlined />}
				onClick={() => onClick()}
			/>
		</>
	);
};

export default AddButton;
