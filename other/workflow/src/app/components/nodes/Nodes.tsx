import { ChangeEvent } from "react";
import "../../types/node.d.ts";
import { BaseNode, EmptyBaseNode } from "./Base";
import { Handle, Position } from "@xyflow/react";

const handleNodeClick = (props: BaseNodeProps) => {
	const { data, id } = props;
	data.onNodeClickCallback(id);
};

const onCloseIconClick = (
	event: ChangeEvent<HTMLInputElement>,
	props: BaseNodeProps
) => {
	event.stopPropagation();

	const { data, id } = props;
	data.onDeleteNodeCallback(id);
};

export const Source = (props: BaseNodeProps) => {
	return (
		<div className="NodeWrapper">
			<BaseNode
				{...props}
				onNodeClick={() => handleNodeClick(props)}
				onCloseIconClick={(event: ChangeEvent<HTMLInputElement>) =>
					onCloseIconClick(event, props)
				}
			/>
			<Handle type="source" position={Position.Bottom} className="NodePort" />
		</div>
	);
};

export const Action = (props: BaseNodeProps) => {
	<div className="NodeWrapper">
		<Handle type="target" position={Position.Top} className="NodePort" />
		<BaseNode
			{...props}
			onNodeClick={() => handleNodeClick(props)}
			onCloseIconClick={(event: ChangeEvent<HTMLInputElement>) =>
				onCloseIconClick(event, props)
			}
		/>
		<Handle type="source" position={Position.Bottom} className="NodePort" />
	</div>;
};

export const Condition = (props: BaseNodeProps) => {
	<div className="NodeWrapper">
		<Handle type="target" position={Position.Top} className="NodePort" />;
		<BaseNode
			{...props}
			additionalClassName="conditionNode"
			onNodeClick={() => handleNodeClick(props)}
			onCloseIconClick={(event: ChangeEvent<HTMLInputElement>) =>
				onCloseIconClick(event, props)
			}
		/>
		<Handle
			id="condition_0"
			type="target"
			position={Position.Bottom}
			className="NodePort"
		/>
		;
		<Handle
			id="condition_1"
			type="target"
			position={Position.Bottom}
			className="NodePort"
		/>
		;
	</div>;
};

export const End = (props: BaseNodeProps) => {
	<div className="NodeWrapper">
		<Handle type="target" position={Position.Top} className="NodePort" />;
		<BaseNode {...props} disabled={true} />
	</div>;
};

export const Empty = (props: BaseNodeProps) => {
	<div className="NodeWrapper">
		<Handle type="target" position={Position.Top} className="NodePort" />;
		<EmptyBaseNode {...props} disabled={true} />
		<Handle
			type="source"
			position={Position.Bottom}
			className="NodePort"
			style={{ opacity: 0 }}
		/>
		;
	</div>;
};
