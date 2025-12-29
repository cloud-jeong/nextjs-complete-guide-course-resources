import {
	CheckCircleOutlined,
	CloseOutlined,
	CommentOutlined,
	DatabaseOutlined,
	FlagOutlined,
	MailOutlined,
} from "@ant-design/icons";
// import * as colors from "@contactlab/ds-tokens/constants/colors";
import "./Style.scss";

const getColor = (type: string) => {
	switch (type) {
		case "source":
			return "#52c41a"; //colors.success
		case "email":
			return "#1890ff"; // colors.accent;
		case "sms":
			return "#1890ff"; // colors.accent;
		case "rule":
			return "#faad14"; // colors.warning;
		case "end":
			return "#141414"; // colors.base;
		default:
			return "#141414"; //colors.base;
	}
};

const getIcornSrc = (type: string) => {
	const color = getColor(type);

	switch (type) {
		case "source":
			return <DatabaseOutlined className="NodeIcorn" style={{ color }} />;
		case "email":
			return <MailOutlined className="NodeIcorn" style={{ color }} />;
		case "sms":
			return <CommentOutlined className="NodeIcorn" style={{ color }} />;
		case "rule":
			return <CheckCircleOutlined className="NodeIcorn" style={{ color }} />;
		case "end":
			return <FlagOutlined className="NodeIcorn" style={{ color }} />;
	}
};

export const BaseNode = (props: BaseNodeProps) => {
	const content = (
		<>
			{getIcornSrc(props.type)}
			<div className="NodeContent">
				<div className="NodeTitle">{props.data.title}</div>
				<p className="NodeDesc">{props.data.description}</p>
			</div>
		</>
	);

	return (
		<div
			data-selected={props.selected}
			aria-disabled={props.disabled}
			className={`NodeInnerWrapper ${props.additionalClassName}`}
			style={{ color: getColor(props.type) }}
			{...(props.onNodeClick && {
				onClick: () => props.onNodeClick(props.type, props.data),
			})}
		>
			{content}
			<CloseOutlined className="closeIcon" onClick={props.onCloseIconClick} />
		</div>
	);
};

export const EmptyBaseNode = (props: BaseNodeProps) => {
	return <div className="EmptyNodeInnerWrapper"></div>;
};
